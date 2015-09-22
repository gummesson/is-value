/**
 * Dependencies
 */

var test = require('tape')
var isValue = require('./')

/**
 * Tests
 */

test('isValue(value?)', function(assert) {
  assert.equal(isValue(), false)
  assert.equal(isValue(null), false)
  assert.equal(isValue(undefined), false)
  assert.equal(isValue(0), true)
  assert.equal(isValue(1), true)
  assert.equal(isValue(false), true)
  assert.equal(isValue(true), true)
  assert.equal(isValue(''), true)
  assert.equal(isValue('string'), true)
  assert.equal(isValue([]), true)
  assert.equal(isValue({}), true)
  assert.equal(isValue(function() {}), true)
  assert.equal(isValue(new Date()), true)
  assert.equal(isValue(new RegExp()), true)
  assert.equal(isValue(new Error()), true)
  assert.end()
})
