import DS from 'ember-data';
import Ember from 'ember';

var Ben = DS.Model.extend({
  firstName:    'Ben',
  lastName:     DS.attr('string'),
  department:   DS.belongsTo('department', {async: true}),
  hairType:     DS.belongsTo('hairType', {async: true}),
  hasBeard:     DS.attr('boolean'),
  wearsGlasses: DS.attr('boolean'),
  avatar:       DS.attr('string', {
                        defaultValue: 'images/default-avatar.png'
  }),

  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});

Ben.reopenClass({
  FIXTURES: [
    {
      id: 1,
      lastName: 'Limmer',
      department: 1,
      hairType: 2,
      hasBeard: true,
      wearsGlasses: false
    },
    {
      id: 2,
      lastName: 'Donovan',
      department: 2,
      hairType: 1,
      hasBeard: false,
      wearsGlasses: false
    },
    {
      id: 3,
      lastName: 'Swain',
      department: 3,
      hairType: 1,
      hasBeard: false,
      wearsGlasses: false
    },
    {
      id: 4,
      lastName: 'Hoskins',
      department: 4,
      hairType: 1,
      hasBeard: true,
      wearsGlasses: true
    },
    {
      id: 5,
      lastName: 'Crawford',
      department: 5,
      hairType: 3,
      hasBeard: false,
      wearsGlasses: false
    }
  ]
});

export default Ben;