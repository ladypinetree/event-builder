import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    cancel () {
      this.transitionTo('application');
    },
    signOut() {
      this.get('auth').signOut()
        .then(() => this.get('store').unloadAll())
        .then(() => this.transitionTo('sign-in'))
        .then(() => {
          this.get('flashMessages').warning('You have been signed out.');
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Are you sure you\'re signed-in?');
        });
    },

    error(reason) {
      let unauthorized = reason.errors && reason.errors.some((error) =>
        error.status === '401'
      );
      let notCreated = reason.errors && reason.errors.some((error) =>
        error.status === '404'
      );
      let noEntity = reason.errors && reason.errors.some((error) =>
        error.status === '422'
      );

      if (unauthorized) {
        this.get('flashMessages')
          .danger('You must be authenticated to access this page.');
        this.transitionTo('/sign-in');
      }
      if (notCreated) {
        this.get('flashMessages')
          .danger('This page does not exist');
        this.transitionTo('events');
      }
      if (noEntity) {
        this.get('flashMessages')
          .danger('Please fill out the form.');
        this.transitionTo('events');
      } else {
        this.get('flashMessages')
          .danger('There was a problem. Please try again.');
      }

      return false;
    },
  },
});
