import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteEvent () {
      this.sendAction('deleteEvent', this.get('event'));
    },
    editEvent () {
      this.sendAction('editEvent', this.get('event'));
    }
  }
});
