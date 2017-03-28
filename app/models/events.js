import DS from 'ember-data';

export default DS.Model.extend({
  event_title: DS.attr('string'),
  event_type: DS.attr('string'),
  event_date: DS.attr('date'),
  user: DS.belongsTo('user'),
  editable: DS.attr('boolean')
});
