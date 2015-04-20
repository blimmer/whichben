import DS from 'ember-data';

export default DS.Model.extend({
  property: DS.attr('string'),
  value:    DS.attr(),
  modifier: DS.attr('string'),
});
