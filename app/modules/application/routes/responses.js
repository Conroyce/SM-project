SmS.ResponsesRoute = Ember.Route.extend({
  model:function() {
    return Ember.$.getJSON('/responses.json').then(function(data) {
      return data;
    });
  }
});