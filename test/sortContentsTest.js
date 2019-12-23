const { assert } = require('chai');
const { sortContents } = require('../src/sortContents');

describe('Sort Contents', () => {
  it('Should sort the given content', () => {
    const actual = sortContents({ contents: ['b', 'g', 'A', 'C'] });
    const expected = { contents: ['A', 'C', 'b', 'g'] };
    assert.deepStrictEqual(actual, expected);
  });
});
