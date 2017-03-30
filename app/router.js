import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('events');
  this.route('not-found', { path: '/*wildcard' });
  this.route('event', { path: '/events/:event_id' });
  this.route('new');
  this.route('edit', { path: '/events/:event_id/edit' });
});

export default Router;
