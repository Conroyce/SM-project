SmS.Router.map(function () {
  this.route('response', {path: '/responses/:response_id'})
  this.route('responses');
  // this.resource('response', { path: '/responses/:response_id'});
	// this.resource('todos', function () {
	// 	this.route('new');
	// 	this.route('edit', {
	// 		path: '/:todo_id'
	// 	});
	// });
	// this.route('about');
 //  this.route('contact');
	// this.route('error404', { path: '*:' });
});

SmS.ResponseRoute = Ember.Route.extend({
  model: function(params) {
    var par = parseInt(params.response_id);
    return survey[par-1];

  }
})

var survey = [[{
    id:1,
    num:9,
    name: 'Jane Doe',
    date: '02/10/2015'
  },{
    question: 'What would you like to see most improved?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'    
  },{
    question: 'What is most frustrating?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'
  },{
    question: 'Any other comments?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'
  }],[{
    id:2,
    num:9,
    name: 'John Hatch',
    date: '02/10/2015'
  },{
    question: 'What would you like to see most improved?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'    
  },{
    question: 'What is most frustrating?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'
  },{
    question: 'Any other comments?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'
  }],[{
    id:3,
    num:9,
    name: 'Jane Goodall',    
    date: '02/10/2015'
  },{
    question: 'What would you like to see most improved?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'    
  },{
    question: 'What is most frustrating?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'
  },{
    question: 'Any other comments?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna. Fusce vel aliquet neque, quis volutpat turpis. Vivamus pulvinar augue vitae semper molestie. Proin sit amet nulla id massa facilisis malesuada vel ac justo. Morbi feugiat tempus commodo. Integer condimentum imperdiet molestie.'
  }]];
