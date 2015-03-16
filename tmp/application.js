(function() {

window.SmS = Ember.Application.create();

// These requires will be appended to this file using grunt-neuter


})();

(function() {

Ember.Application.initializer({
	name: 'setup',

	initialize: function (container, application) {
		// Basic idea of an initializer
		// Do things like setup injections here
		
	}
});


})();

(function() {

SmS.Response = DS.Model.extend({
  name: DS.attr('string'),
  num: DS.attr('number'),
  date: DS.attr('string'),
  question: DS.attr('string'),
  answer: DS.attr('string')
});

})();

(function() {

SmS.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('responses');
  }
});

})();

(function() {

SmS.ResponseRoute = Ember.Route.extend({
  model: function(params) {
    var par = params.response_id;
    return Ember.$.getJSON('/responses/'+par+'.json').then(function(data) {
      return {data: data};
    });
  }
});

})();

(function() {

SmS.ResponsesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('response');
  }
})

})();

(function() {

SmS.ApplicationView = Ember.View.extend({

});


})();

(function() {

SmS.ApplicationAdapter = DS.RESTAdapter.extend({
	namespace: 'api',
	ajaxError: function(jqXHR) {
		var error = this._super(jqXHR);

		if (jqXHR && jqXHR.status === 422) {
			var errors = Ember.$.parseJSON(jqXHR.responseText)["errors"];

			return new DS.InvalidError(errors);
		} else {
			return error;
		}
	}
});

SmS.ApplicationSerializer = DS.RESTSerializer.extend({
	extractSingle: function(store, type, payload, id, requestType) {
		var finalPayload = {};
		finalPayload[type.typeKey] = payload;
		return this._super(store, type, finalPayload, id, requestType);
	},

	extractArray: function(store, type, payload, id, requestType) {
		var finalPayload = {};
		finalPayload[Ember.String.pluralize(type.typeKey)] = payload;
		return this._super(store, type, finalPayload, id, requestType);
	},

	serializeIntoHash: function(data, type, record, options) {
		var serializedData = this.serialize(record, options);
		for (var key in serializedData) {
			if (Ember.isArray(serializedData[key]) && !serializedData[key].length) {

			} else {
				data[key] = serializedData[key];
			}
		}
	},

	keyForRelationship: function(key, kind) {

		key = Ember.String.decamelize(key);
		if (kind === "belongsTo") {
			return key + "_id";
		} else {
			return key;
		}
	},

	normalizeRelationships: function(type, hash) {
		var payloadKey, key, objList, idList = [];
		if (this.keyForRelationship) {
			type.eachRelationship(function(key, relationship) {
				payloadKey = this.keyForRelationship(key, relationship.kind);
				objList = hash["surveys"] || [];
				objList.forEach(function(item) {
					idList.push(Ember.get(item, 'id'));
				});

				hash[key] = idList;
				delete hash[payloadKey];
			}, this);
		}
	}
});


})();

(function() {

SmS.Router.map(function () {
  this.route('response', {path: 'responses/:response_id'})
  this.route('responses', {path: '/responses'});
});

})();