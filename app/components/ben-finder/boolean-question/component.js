import BenFinderComponent from 'whichben/components/ben-finder/component';

export default BenFinderComponent.extend({
  actions: {
    yes: function () {
      this.send('sendSetFilter', this.get('propertyName'), true);
    },
    no: function() {
      this.send('sendSetFilter', this.get('propertyName'), false);
    }
  }
});
