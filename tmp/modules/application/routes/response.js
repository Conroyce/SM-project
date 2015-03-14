SmS.ResponseRoute = Ember.Route.extend({
  model: function(params) {
    var par = parseInt(params.response_id);
    return Ember.$.getJSON('/responses/'+par+'.json').then(function(data) {
      return {data: data};
    });
  }
});