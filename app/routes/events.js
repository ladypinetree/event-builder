import Ember from 'ember';

export default Ember.Route.extend({
  // auth: Ember.inject.service(),
  // isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  // userId: JSON.parse(window.localStorage.getItem('storage:auth')).id,
  //
  // model () {
  //   if(this.get('isAuthenticated')) {
  //     console.log(this.get('userId'));
  //     console.log(this.get('event'));
  //     return this.get('store').findAll('event');
  //   } else {
  //     this.transitionTo('index');
  //   }
  // },
  // actions: {
  //   deleteEvent(event) {
  //     event.destroyRecord();
  //   },
  // }
});
