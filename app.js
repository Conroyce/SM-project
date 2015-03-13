var express = require('express');

var surveys = [{
      id:1,
      name: 'Jane Doe',
      question: 'What would you like to see most improved?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.',
      date: '02/10/2015'
    },{
      id:2,
      name: 'John Hatch',
      question: 'What would you most like to see improved?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.',
      date: '2/10/2015'
    },{
      id:3,
      name: 'Jane Goodall',
      question: 'What would you most like to see improved?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.',
      date: '20/10/2015'
    }]

module.exports = function(app) {
  app.get('/responses.json', function(req, res) {
    res.json(surveys);
  });
  
  app.get('/responses/:responses_id'+'.json',function(req,res) {
    console.log(req.params.responses_id);
    var id = parseInt(req.params.responses_id)
    res.json(surveys[id-1])
  })

  app.use('/', express.static(__dirname + '/dist'));

  // app.get("/", function(req,res) {
  //   res.redirect("/app/");
  // });

  app.get("/data", function(req,res) {
    res.json(surveys);
  })
	// app.use('/', express.static(__dirname + '/dist'));
  // app.use('/app', express.static(__dirname + '/dist'));
};