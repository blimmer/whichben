import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('ben', {
  // Specify the other units that are required for this test.
  needs: ['model:department', 'model:hair-type']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
