const assert = require('chai').assert;
const { sortContents } = require('../src/sortLib');

describe('Sort Lib', () => {
  it('Should sort the contents', () => {
    const actual = sortContents(['b', 'g', 'A', 'C']);
    const expected = ['A', 'C', 'b', 'g'];
    assert.deepStrictEqual(actual, expected);
  });
});
