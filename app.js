var express = require('express');
var fs = require('fs');
var surveys = require('./surveys.json');
var survey = require('./survey.json');


module.exports = function(app) {
  app.use('/', express.static(__dirname + '/dist'));
 
  app.get('/responses.json',function(req, res) {
    res.json(surveys);
  });

  app.post('/responses.json',function(req, res) {
    surveys.push(req.body);
    fs.writeFileSync("surveys.json", JSON.stringify(surveys));
    res.send(200);
  });
  
  app.get('/responses/:responses_id'+'.json',function(req,res) {
    var id = parseInt(req.params.responses_id);
    res.json(survey[id-1]);
  })

  app.delete('/responses/:responses_id'+'.json',function(req,res) {
    var id = req.params.responses_id-1;
    var deleted = survey.splice(id,1);
    fs.writeFileSync("survey.json",JSON.stringify(survey));
    res.send(200);
  });

  app.put('/responses/:responses_id'+'.json',function(req,res) {
    var id = req.params.responses_id-1;
    var data = req.body;
    survey.splice(id,1,data);
    fs.writeFileSync("survey.json",JSON.stringify(survey));
    res.send(200);
  });
};