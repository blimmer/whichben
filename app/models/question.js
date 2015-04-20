import DS from 'ember-data';

var Question = DS.Model.extend({
  type: DS.attr('string'),
  propertyName: DS.attr('string'),
  questionText: DS.attr('string'),
  options: DS.attr()
});

Question.reopenClass({
  FIXTURES: [
    {
      id: 1,
      type: 'boolean',
      propertyName: 'hasBeard',
      questionText: 'Does this Ben have a beard?'
    },
    {
      id: 2,
      type: 'boolean',
      propertyName: 'wearsGlasses',
      questionText: 'Does this Ben wear glasses?'
    }
  ]
});

export default Question;
