const { assert } = require('chai');
const Load = require('../src/loadContents');

const fs = {
  readFileSync: function(path) {
    assert.strictEqual(path, 'path');
    return 's\nn\na\nB';
  }
};

describe('Load Contents', () => {
  describe('AreAllFilesExists', () => {
    const load = new Load({ fileNames: ['path'] }, fs);
    it('Should give true if all files are exists', () => {
      fs.existsSync = function(path) {
        assert.strictEqual(path, 'path');
        return true;
      };
      assert.isTrue(load.areAllFilesExists());
    });

    it('Should give false if all files are not exists', () => {
      fs.existsSync = function(path) {
        assert.strictEqual(path, 'path');
        return false;
      };
      assert.isFalse(load.areAllFilesExists());
    });
  });

  describe('ReadContents', () => {
    const load = new Load({ fileNames: ['path'] }, fs);
    it('Should read the contents of file', () => {
      assert.deepStrictEqual(load.readContents(), ['s', 'n', 'a', 'B']);
    });
  });

  describe('LoadContents', () => {
    const load = new Load({ fileNames: ['path'] }, fs);
    it('Should read the contents of all files', () => {
      fs.existsSync = function(path) {
        assert.strictEqual(path, 'path');
        return true;
      };
      const actual = load.loadContents().contents;
      assert.deepStrictEqual(actual, ['s', 'n', 'a', 'B']);
    });

    it('Should tell error if one file is not exists', () => {
      fs.existsSync = function(path) {
        assert.strictEqual(path, 'path');
        return false;
      };
      const expected = ['sort: No such file or directory'];
      assert.deepStrictEqual(load.loadContents().msg, expected);
      assert.isTrue(load.loadContents().error);
    });
  });
});
