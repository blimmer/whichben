import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      bens: this.store.find('ben'),
      departments: this.store.find('department'),
      questions: this.store.find('question')
    });
  },
  setupController: function(controller) {
    this._super.apply(this, arguments);

    controller.set('store', this.store);
    controller.reset();
  },
  actions: {
    foundBen: function(ben) {
      this.transitionTo('found-ben', ben);
    }
  }
});
