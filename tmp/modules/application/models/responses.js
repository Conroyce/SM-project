SmS.Response = DS.Model.extend({
  name: DS.attr('string'),
  num: DS.attr('number'),
  date: DS.attr('string'),
  question: DS.attr('string'),
  answer: DS.attr('string')
});