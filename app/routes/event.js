import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('event', params.event_id);
  },

  actions: {
    deleteEvent () {
      event.destroyRecord();
      // .then(() => this.transitionTo('events'));
    },
  //
  //   createEvent (data) {
  //     let event = this.get('store').createRecord('event', data);
  //     return event.save();
  //   },
  //
  },
});
