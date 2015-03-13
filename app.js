var express = require('express');

module.exports = function(app) {
	app.use('/app', express.static(__dirname + '/dist'));
};