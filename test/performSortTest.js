const { assert } = require('chai');
const { parseUserArgs, sortContents } = require('../src/performSort');
describe('Perform Sort', () => {
  describe('Validate Args', () => {
    it('should validate if one file is present', () => {
      const actual = parseUserArgs(['node', 'sort.js', 'filename']);
      assert.deepStrictEqual(actual, { fileNames: ['filename'] });
    });

    it('should validate if more than one file', () => {
      const actual = parseUserArgs(['node', 'sort.js', 'file1', 'file2']);
      assert.deepStrictEqual(actual, { fileNames: ['file1', 'file2'] });
    });
  });

  describe('Sort Contents', () => {
    it('Should sort the given content', () => {
      const actual = sortContents({ contents: ['b', 'g', 'A', 'C'] });
      const expected = { contents: ['A', 'C', 'b', 'g'] };
      assert.deepStrictEqual(actual.contents, expected.contents);
    });
  });
});
