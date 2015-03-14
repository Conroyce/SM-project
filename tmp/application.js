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
		
		// Force the menu to collapse on navigation
		$('body').on('click', '.navbar-collapse li', function () {
			$('.navbar-collapse').collapse('hide');
		});
		
	}
});


})();

(function() {

SmS.TodoModalMixin = Ember.Mixin.create({
	closeModal: function (modal) {
		var controller = this;
		
		modal.$().on('hidden.bs.modal', function () {
			controller.transitionToRoute('todos.index');
		});
		modal.$().modal('hide');
		
	}
});


})();

(function() {

SmS.TodoItemComponent = Ember.Component.extend({

	tagName: 'li',
	classNames: ['list-group-item'],

	classNameBindings: ['todo.done']
});


})();

(function() {

SmS.Todo = DS.Model.extend({
	title: DS.attr('string'),
	done: DS.attr('boolean'),

	// Update the database immediately upon checking done
	doneDidChange: function () {
		if (this.get('isDirty')) this.save();
	}.observes('done')
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
    var par = parseInt(params.response_id);
    return Ember.$.getJSON('/responses/'+par+'.json').then(function(data) {
      return data;
    });
  }
});

})();

(function() {

SmS.ResponsesRoute = Ember.Route.extend({
  model:function() {
    return Ember.$.getJSON('/responses.json').then(function(data) {
      console.log(data);
      return data;
    });
  }
});

})();

(function() {

SmS.TodosNewRoute = Ember.Route.extend({
	model: function () {
		return this.store.createRecord('todo');
	},
	actions: {
		error: function () {
			console.log('error', arguments);
		}
	}
});


})();

(function() {

SmS.TodosRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('todo');
	}
});


})();

(function() {

SmS.TodosEditController = Ember.ObjectController.extend(SmS.TodoModalMixin, {
	actions: {
		save: function (modal) {
			var controller = this,
				person = this.get('model');

			person.save().then(function () {
				controller.closeModal(modal);
			});
		},

		cancel: function (modal) {
			var person = this.get('model');

			person.rollback();

			this.closeModal(modal);
		}
	}
});


})();

(function() {

SmS.TodosNewController = Ember.ObjectController.extend(SmS.TodoModalMixin, {
	actions: {
		save: function (modal) {
			var controller = this,
				person = this.get('model');

			person.save().then(function () {
				controller.closeModal(modal);
			});
		},

		cancel: function (modal) {
			var person = this.get('model');

			person.deleteRecord();

			this.closeModal(modal);
		}
	}
});



})();

(function() {

SmS.TodosController = Ember.ArrayController.extend({
	actions: {
		removeDone: function () {
			var doneTodos = this.filterBy('done');
			doneTodos.invoke('deleteRecord');
			doneTodos.invoke('save');
		}
	}
});


})();

(function() {

SmS.ApplicationView = Ember.View.extend({

});


})();

(function() {

SmS.TodosEditView = Ember.View.extend({

	classNames: ['modal', 'fade'],

	didInsertElement: function () {
		this.$().modal({
			show: true
		});
	}

});


})();

(function() {

SmS.TodosNewView = SmS.TodosEditView.extend({
	templateName: 'todos/edit',
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

				objList = hash[payloadKey] || [];

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
  this.route('response', {path: '/responses/:response_id'})
  this.route('responses');
});

})();