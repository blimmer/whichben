import Ember from 'ember';

export default Ember.Component.extend({
  propertyName: null,
  actions: {
    sendSetFilter: function (name, value) {
      this.sendAction('setFilter', name, value);
    }
  }
});
