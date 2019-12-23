const assert = require('chai').assert;
const { sortContents, loadContents } = require('../src/sortLib');

describe('Sort Lib', () => {
  it('Should sort the contents', () => {
    const actual = sortContents(['b', 'g', 'A', 'C']);
    const expected = ['A', 'C', 'b', 'g'];
    assert.deepStrictEqual(actual, expected);
  });

  it('Should load the contents', () => {
    const fs = {
      readFileSync: function(path) {
        assert.strictEqual(path, 'path');
        return 's\nn\na\nB';
      }
    };
    const actual = loadContents('path', fs);
    const expected = ['s', 'n', 'a', 'B'];
    assert.deepStrictEqual(actual, expected);
  });
});
