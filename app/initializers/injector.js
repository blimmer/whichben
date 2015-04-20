export function initialize(container, application) {
  application.inject('component:ben-finder/concrete-questions/which-department', 'store', 'store:main');
}

export default {
  name: 'injector',
  initialize: initialize
};
