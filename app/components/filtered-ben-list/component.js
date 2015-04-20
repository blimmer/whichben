import Ember from 'ember';

export default Ember.Component.extend({
  className: 'filtered-ben-list',

  filters: Ember.Object.create(),
  filteredBens: Ember.computed('bens', 'filters', function() {
    var filteredBens = this.get('bens');

    var filters = this.get('filters');
    for (var filter in filters) {
      if (filters.hasOwnProperty(filter)) {
        filteredBens = filteredBens.filterBy(filter, filters.get(filter));
      }
    }

    return filteredBens;
  })
});
