SmS.ResponsesRoute = Ember.Route.extend({
  model:function() {
    return surveys;
  }
});

var surveys = [{
  id:1,
  num: 9,
  name: 'Jane Doe',
  question: 'What would you like to see most improved?',
  answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna.',
  date: '02/10/2015'
},{
  id:2,
  num: 9,
  name: 'John Hatch',
  question: 'What would you most like to see improved?',
  answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna.',
  date: '02/10/2015'
},{
  id:3,
  num: 9,
  name: 'Jane Goodall',
  question: 'What would you most like to see improved?',
  answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula odio enim, tempus vehicula nisi posuere at. Integer non cursus nunc. Donec in nisl id ante ultrices posuere. Vivamus nec aliquam lacus, at lacinia urna. Duis vestibulum mollis nulla vel rutrum. Integer efficitur sed dolor tempor ultricies. Nam pharetra libero et orci sagittis mollis. Nunc ac massa neque. Aliquam semper odio et purus porta, ut congue lectus pharetra. Vivamus libero quam, mattis non purus quis, dictum sagittis magna.',
  date: '02/10/2015'
}];