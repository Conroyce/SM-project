var express = require('express'),
	orm = require('orm'),
	inflectorController = require('./server/controllers/inflector'),
	survey = require('./survey.json'),
	surveys = require('./surveys.json');

module.exports = function (server) {
	server.use(orm.express('sqlite://./test.db', {
		define: function (db, models, next) {
			// Load your models here
			models.todo = require('./server/models/todo')(db);

			db.settings.set('instance.returnAllErrors', true);

			db.sync();

			next();
		}
	}));

	server.get('/api/v1', function (req, res) {
		res.send('API v1');
	});

	server.post('/api/:modelName', function (req, res) {
		inflectorController.post(req, res);
	});

	server.get('/api/:modelName', function (req, res) {
		console.log("reached backend", surveys);
		res.json(surveys)
	});

	server.get('/api/:modelName/:id', function (req, res) {
		var id = req.params.id-1;
		console.log("in backend: ", survey[id]);
		res.json(survey[id])
	});

	server.put('/api/:modelName/:id', function (req, res) {
		inflectorController.put(req, res);
	});

	server.delete('/api/:modelName/:id', function (req, res) {
		inflectorController.delete(req, res);
	});
};