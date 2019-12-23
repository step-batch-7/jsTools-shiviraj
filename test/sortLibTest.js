const assert = require('chai').assert;
const Sort = require('../src/sortLib');

const fs = {
  readFileSync: function(path) {
    assert.strictEqual(path, 'path');
    return 's\nn\na\nB';
  }
};

describe('Sort', () => {
  const sort = new Sort();

  describe('load contents', () => {
    it('Should load the contents of file', () => {
      const actual = sort.loadContents('path', fs);
      assert.deepStrictEqual(actual, ['s', 'n', 'a', 'B']);
    });
  });

  describe('sort contents', () => {
    it('Should sort the contents', () => {
      sort.loadContents('path', fs);
      const actual = sort.sortContents();
      assert.deepStrictEqual(actual, ['B', 'a', 'n', 's']);
    });
  });
});
