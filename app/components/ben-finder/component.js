import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ben-finder'],
  isBooleanQuestion: Ember.computed.equal('question.type', 'boolean'),
  isSelectQuestion:  Ember.computed.equal('question.type', 'select'),

  sendSetFilter: function (name, value) {
    this.sendAction('setFilter', name, value);
  },

  actions: {
    yes: function () {
      this.sendSetFilter(this.get('question.propertyName'), true, '===');
    },
    no: function () {
      this.sendSetFilter(this.get('question.propertyName'), false, '===');
    }
  }
});
