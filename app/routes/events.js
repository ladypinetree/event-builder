
import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('event');
  },
  
  actions: {
    toggleEventDone (event) {
      event.toggleProperty('done');
      return event.save();
    },

    deleteEvent (event) {
      return event.destroyRecord();
    },

    createEvent (data) {
      let event = this.get('store').createRecord('event', data);
      return event.save();
    },

  },
});
