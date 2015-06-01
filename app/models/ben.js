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
      wearsGlasses: false,
      avatar: 'images/limmer.png'
    },
    {
      id: 2,
      lastName: 'Donovan',
      department: 2,
      hairType: 1,
      hasBeard: false,
      wearsGlasses: false,
      avatar: 'images/donovan.png'
    },
    {
      id: 3,
      lastName: 'Swain',
      department: 3,
      hairType: 1,
      hasBeard: false,
      wearsGlasses: false,
      avatar: 'images/swain.png'
    },
    {
      id: 4,
      lastName: 'Hoskins',
      department: 5,
      hairType: 1,
      hasBeard: true,
      wearsGlasses: true,
      avatar: 'images/hoskins.png'
    },
    {
      id: 5,
      lastName: 'Crawford',
      department: 5,
      hairType: 3,
      hasBeard: false,
      wearsGlasses: false,
      avatar: 'images/crawford.png'
    }
  ]
});

export default Ben;
