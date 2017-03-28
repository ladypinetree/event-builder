import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('event', params.event_id);
  },

  // actions: {
  //   toggleEventDone (event) {
  //     event.toggleProperty('done');
  //     return event.save();
  //   },
  //
  //   deleteEvent (event) {
  //     return event.destroyRecord();
  //   },
  //
  //   createEvent (data) {
  //     let event = this.get('store').createRecord('event', data);
  //     return event.save();
  //   },
  //
  // },
});
