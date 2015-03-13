module("Index", {
  setup: function () {
    SmS.reset();
  }
});

test("First H1 contains SmS", function () {
  visit('/').then(function () {
    equal($('#ember h1').html(), 'SmS', 'Title is SmS');
  });
});

