import Ember from 'ember';
import BenFinderComponent from 'whichben/components/ben-finder/component';

export default BenFinderComponent.extend({
  selectedOption: null,

  _selectionMade: Ember.observer('selectedOption', function () {
    this.send('sendSetFilter', this.get('propertyName'), this.get('selectedOption'));
  })
});
