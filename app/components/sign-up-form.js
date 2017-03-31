import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  credentials: {},

  init() {
  this._super(...arguments);
  this.set('credentials', {});
},

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
