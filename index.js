var NODE_ENV = process.env.NODE_ENV,
	express = require('express'),
	server = express(),
  multer = require('multer'),
  bodyParser = require('body-parser')

server.configure(function() {
	server.use(express.json());
	server.use(express.urlencoded());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended:true }));
  server.use(multer());
});

require('./app')(server);
require('./server')(server);

if (NODE_ENV === 'production') {
	server.listen(8001, 'localhost');
} else {
	// Export server in dev to work with grunt-express
	module.exports = server;
}