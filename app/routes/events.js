
import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    let store = this.get('store');
    store.unloadAll('event');
    return store.findAll('event');
  },

  actions: {
    deleteEvent (event) {
      event.destroyRecord();
    },

    createEvent (data) {
      let event = this.get('store').createRecord('event', data);
      return event.save();
    },

    toggleEventDone (event) {
      event.toggleProperty('done');
      return event.save();
    },

  },
});
