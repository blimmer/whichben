import Ember from 'ember';
import SelectQuestionComponent from 'whichben/components/ben-finder/select-question/component';

export default SelectQuestionComponent.extend({
  propertyName: 'department.id',
  questionText: 'Which department is this Ben in?',
  layoutName: 'components/ben-finder/select-question',
  options: Ember.computed(function() {
    return this.get('store').find('department');
  })
});
