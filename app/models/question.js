import DS from 'ember-data';
import Ember from 'ember';

var Question = DS.Model.extend({
  type: DS.attr('string'),
  propertyName: DS.attr('string'),
  questionPrefix: 'Does the Ben you\'re looking for',
  question: DS.attr('string'),
  options: DS.attr(),
  questionText: Ember.computed('questionPrefix', 'question', function () {
    return `${this.get('questionPrefix')} ${this.get('question')}?`;
  })
});

Question.reopenClass({
  FIXTURES: [
    {
      id: 1,
      type: 'boolean',
      propertyName: 'hasBeard',
      question: 'have a beard'
    },
    {
      id: 2,
      type: 'boolean',
      propertyName: 'wearsGlasses',
      question: 'wear glasses'
    }
  ]
});

export default Question;
