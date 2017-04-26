import DS from 'ember-data';

export default DS.Model.extend({
  eventTitle: DS.attr('string'),
  eventType: DS.attr('string'),
  eventDate: DS.attr('date'),
  todo1: DS.attr('string'),
  todo2: DS.attr('string'),
  // user: DS.belongsTo('user'),
  // editable: DS.attr('boolean')
});
