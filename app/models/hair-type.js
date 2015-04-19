import DS from 'ember-data';

var HairType = DS.Model.extend({
  name: DS.attr('string')
});

HairType.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Short Hair'
    },
    {
      id: 2,
      name: 'Curly Hair'
    },
    {
      id: 3,
      name: 'Long Hair'
    }
  ]
});

export default HairType;
