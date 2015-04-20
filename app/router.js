import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

export default Router.map(function() {
  this.route('found-ben', {path: '/found/:id'});
});
