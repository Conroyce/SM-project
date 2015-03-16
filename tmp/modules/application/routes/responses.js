SmS.ResponsesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('response');
  }
})