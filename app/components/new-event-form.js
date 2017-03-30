import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save () {
      let date = new Date (this.get('event.eventDate'));
      this.set('event.eventDate', date);
      this.sendAction('save', this.get('event'));
    },
    cancel () {
      this.get('event').rollbackAttributes();
      this.sendAction('cancel');
    },
  }
});
