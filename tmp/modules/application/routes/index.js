SmS.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('responses');
  }
});