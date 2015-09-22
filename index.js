/**
 * Exports
 */

module.exports = isValue

/**
 * Check if a value exists.
 *
 * @param {*} value
 * @return {Boolean}
 */

function isValue(value) {
  return !!arguments.length && value != null
}
