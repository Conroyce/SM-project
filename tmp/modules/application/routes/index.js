SmS.IndexRoute = Ember.Route.extend({
	model: function (params) {
		return this.store.find('todo');
	}
});