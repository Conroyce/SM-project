SmS.Router.map(function () {
  this.route('response', {path: '/responses/:response_id'})
  this.route('responses');
	// this.resource('todos', function () {
	// 	this.route('new');
	// 	this.route('edit', {
	// 		path: '/:todo_id'
	// 	});

});

SmS.ResponseRoute = Ember.Route.extend({
  model: function(params) {
    var par = parseInt(params.response_id);
    return Ember.$.getJSON('/responses/'+par+'.json').then(function(data) {
      return data;
    });
  }
});