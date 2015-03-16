var express = require('express'),
	survey = require('./survey.json'),
	surveys = require('./surveys.json');

module.exports = function (server) {
	server.get('/api/v1', function (req, res) {
		res.send('API v1');
	});

	server.get('/api/:modelName', function (req, res) {
		res.json(surveys)
	});

	server.get('/api/:modelName/:id', function (req, res) {
		var id = req.params.id-1;
		res.json(survey[id])
	});

};