import Ember from 'ember';

export default Ember.Controller.extend({
  questionIndex: 0,
  currentQuestion: Ember.computed('model.questions', 'questionIndex', function() {
    return this.get('model.questions').objectAt(this.get('questionIndex'));
  }),

  filters: Ember.A([]),
  filteredBens: Ember.computed('model.bens.@each', 'filters.[]', function() {
    var filteredBens = this.get('model.bens');
    var filters = this.get('filters');

    filters.forEach(function(filter) {
      filteredBens = filteredBens.filterBy(filter.get('property'), filter.get('value'));
    });

    return filteredBens;
  }),

  noBensLeft: Ember.computed.equal('filteredBens.length', 0),
  showUnsure: Ember.computed('noBensLeft', 'currentQuestion', function() {
    var noBensLeft = this.get('noBensLeft');
    var currentQuestion = this.get('currentQuestion');

    if (noBensLeft || !currentQuestion) {
      return true;
    } else {
      return false;
    }
  }),

  reset: function() {
    this.get('filters').forEach(function(filter) {
      filter.deleteRecord();
    });

    this.setProperties({
      'filters': Ember.A([]),
      'questionIndex': 0
    });
  },

  actions: {
    setFilter: function (property, value, modifier) {
      var filter = this.get('store').createRecord('filter', {
        property: property,
        value: value,
        modifier: modifier
      });
      this.get('filters').pushObject(filter);

      this.incrementProperty('questionIndex');

      var filteredBens = this.get('filteredBens');
      if (filteredBens.get('length') === 1) {
        this.send('foundBen', filteredBens.get('firstObject'));
      }
    }
  }
});
