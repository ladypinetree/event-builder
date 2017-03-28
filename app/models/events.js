import DS from 'ember-data';

export default DS.Model.extend({
  eventTitle: DS.attr('string'),
  eventType: DS.attr('string'),
  eventDate: DS.attr('date'),
  // user: DS.belongsTo('user'),
  // editable: DS.attr('boolean')
});
