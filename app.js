var express = require('express');

var surveys = [{
    id:1,
    num:9,
    name: 'Jane Doe',
    date: '02/10/2015',
    question: 'What would you like to see most improved?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'    
  },{
    id:2,
    num:9,
    name: 'John Hatch',
    date: '02/10/2015',
    question: 'What would you like to see most improved?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'    
  },{
    id:3,
    num:9,
    name: 'Jane Goodall',    
    date: '02/10/2015',
    question: 'What would you like to see most improved?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'    
}];

var survey = [[{
    id:1,
    num:9,
    name: 'Jane Doe',
    date: '02/10/2015',
    question: 'What would you like to see most improved?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'    
  },{
    id:1,
    num:9,
    name: 'Jane Doe',
    date: '02/10/2015',
    question: 'What is most frustrating?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'
  },{
    id:1,
    num:9,
    name: 'Jane Doe',
    date: '02/10/2015',
    question: 'Any other comments?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'
  }],[{
    id:2,
    num:9,
    name: 'John Hatch',
    date: '02/10/2015',
    question: 'What would you like to see most improved?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'    
  },{
    id:2,
    num:9,
    name: 'John Hatch',
    date: '02/10/2015',
    question: 'What is most frustrating?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'
  },{
    id:2,
    num:9,
    name: 'John Hatch',
    date: '02/10/2015',
    question: 'Any other comments?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'
  }],[{
    id:3,
    num:9,
    name: 'Jane Goodall',    
    date: '02/10/2015',
    question: 'What would you like to see most improved?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'    
  },{
    id:3,
    num:9,
    name: 'Jane Goodall',    
    date: '02/10/2015',
    question: 'What is most frustrating?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'
  },{
    id:3,
    num:9,
    name: 'Jane Goodall',    
    date: '02/10/2015',
    question: 'Any other comments?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'
}]];


module.exports = function(app) {
  app.get('/responses.json', function(req, res) {
    res.json(surveys);
  });
  
  app.get('/responses/:responses_id'+'.json',function(req,res) {
    var id = parseInt(req.params.responses_id)
    res.json(survey[id-1])
  })

  app.post('/response.json', function(req, res) {
    console.log(req)
  });

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