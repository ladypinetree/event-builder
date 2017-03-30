import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('event');
  },
  actions: {
  createEvent (event) {
    event.save()
    .then(() => this.transitionTo('events'));
  },
  cancel () {
    history.back();
  }

}
});
