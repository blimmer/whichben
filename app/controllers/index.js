import Ember from 'ember';

export default Ember.Controller.extend({
  questionIndex: 0,
  questionComponents: Ember.A([
    'ben-finder/concrete-questions/which-department',
    'ben-finder/concrete-questions/has-beard',
    'ben-finder/concrete-questions/wears-glasses',
    'ben-finder/unsure'
  ]),
  currentQuestion: Ember.computed('questionComponents', 'questionIndex', 'filtersInvalidated', function() {
    var questionComponents = this.get('questionComponents');
    var questionIndex = this.get('questionIndex');

    if (questionComponents.get('length') > questionIndex) {
      return questionComponents.objectAt(questionIndex);
    }
  }),

  // filters: Ember.Object.create(),
  // filtersInvalidated: null,
  filteredBens: Ember.computed('model.bens.@each', 'filters', 'filtersInvalidated', function() {
    var filteredBens = this.get('model.bens');

    var filters = this.get('filters');
    for (var filter in filters) {
      if (filters.hasOwnProperty(filter)) {
        filteredBens = filteredBens.filterBy(filter, filters.get(filter));
      }
    }

    return filteredBens;
  }),

  actions: {
    setFilter: function (name, value) {
      this.set(`filters.${name}`, value);
      this.set('filtersInvalidated', Date.now());
      this.incrementProperty('questionIndex');

      var filteredBens = this.get('filteredBens');
      if(filteredBens.get('length') === 1) {
        this.send('foundBen', filteredBens.get('firstObject'));
      }
    }
  }
});
