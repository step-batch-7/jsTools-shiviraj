const { assert } = require('chai');
const { sortContents, loadContents } = require('../src/loadContents');

describe('Sort Lib', () => {
  it('Should sort the contents', () => {
    const actual = sortContents({ contents: ['b', 'g', 'A', 'C'] });
    const expected = { contents: ['A', 'C', 'b', 'g'] };
    assert.deepStrictEqual(actual, expected);
  });

  const fs = {
    readFileSync: function(path) {
      assert.strictEqual(path, 'path');
      return 's\nn\na\nB';
    }
  };

  it('Should load the contents of file', () => {
    fs.existsSync = function(path) {
      assert.strictEqual(path, 'path');
      return true;
    };
    const actual = loadContents({ fileNames: ['path'] }, fs);
    const expected = { contents: ['s', 'n', 'a', 'B'] };
    assert.deepStrictEqual(actual, expected);
  });

  it('Should give error if file is not exits', () => {
    fs.existsSync = function(path) {
      assert.strictEqual(path, 'path');
      return false;
    };
    const actual = loadContents({ fileNames: ['path'] }, fs);
    const expected = {
      msg: ['sort: No such file or directory'],
      error: true
    };
    assert.deepEqual(actual, expected);
  });
});
