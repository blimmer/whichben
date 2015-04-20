import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      bens: this.store.find('ben'),
      departments: this.store.find('department')
    });
  },
  setupController: function(controller) {
    this._super.apply(this, arguments);

    controller.setProperties({
      questionIndex: 0,
      filtersInvalidated: Date.now(),
      filters: Ember.Object.create()
    });
  },
  actions: {
    foundBen: function(ben) {
      this.transitionTo('found-ben', ben);
    }
  }
});
