import DS from 'ember-data';

var Department = DS.Model.extend({
  name: DS.attr('string')
});

Department.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Engineering'
    },
    {
      id: 2,
      name: 'Sales'
    },
    {
      id: 3,
      name: 'Marketing'
    },
    {
      id: 4,
      name: 'Customer Support'
    },
    {
      id: 5,
      name: 'Account Management'
    }
  ]
});

export default Department;
