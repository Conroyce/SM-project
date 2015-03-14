var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var surveys = require('./surveys.json');
var survey = require('./survey.json');


module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended:true }));
  app.use(multer());
  app.use('/', express.static(__dirname + '/dist'));

  app.get('/responses.json',function(req, res) {
    res.json(surveys);
  })

  app.post('/responses.json',function(req, res) {
    console.log(req.body);
    surveys.push(req.body);
    console.log(surveys);
    res.send(200);
  });
  
  app.get('/responses/:responses_id'+'.json',function(req,res) {
    var id = parseInt(req.params.responses_id)
    res.json(survey[id-1])
  })


  app.get("/data", function(req,res) {
    res.json(surveys);
  })
};