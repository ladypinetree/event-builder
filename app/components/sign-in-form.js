import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'));
    },

    cancel () {
      this.set('credentials', {});
      history.back();
    },
  },
});
