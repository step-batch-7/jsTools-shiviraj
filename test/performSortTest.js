const { assert } = require('chai');
const {
  parseUserArgs,
  loadContents,
  sortContents,
  displayResult
} = require('../src/performSort');
describe('Perform Sort', () => {
  describe('Parse User Args', () => {
    it('should parse the user Args ', () => {
      const actual = parseUserArgs(['node', 'sort.js', 'sample.txt']);
      assert.deepStrictEqual(actual, ['sample.txt']);
    });

    it('should parse the user Args if no file is given ', () => {
      const actual = parseUserArgs(['node', 'sort.js']);
      assert.deepStrictEqual(actual, []);
    });
  });

  describe('Load Contents', () => {
    it('Should load the contents of file', () => {
      const fs = {
        readFileSync: path => {
          assert.equal(path, 'path');
          return '1\n2\n3\n4\n5';
        },
        existsSync: path => {
          assert.equal(path, 'path');
          return true;
        }
      };
      const actual = loadContents(['path'], fs);
      const expected = { content: ['1', '2', '3', '4', '5'] };
      assert.deepStrictEqual(actual, expected);
    });

    it('Should load the contents of multiple file', () => {
      const fs = {
        readFileSync: path => {
          assert.equal(path, 'path');
          return '1\n2';
        },
        existsSync: path => {
          assert.equal(path, 'path');
          return true;
        }
      };
      const actual = loadContents(['path', 'path'], fs);
      const expected = { content: ['1', '2', '1', '2'] };
      assert.deepStrictEqual(actual, expected);
    });

    it('Should tell error if file is not exists', () => {
      const fs = {
        existsSync: path => {
          assert.equal(path, 'path');
          return false;
        }
      };
      const actual = loadContents(['path'], fs);
      assert.deepStrictEqual(actual, {
        error: true,
        content: ['sort: No such file or directory']
      });
    });
  });

  describe('Sort Contents', () => {
    it('should sort the given contents', () => {
      const actual = sortContents({ content: ['a', 'S', 'A'] });
      const expected = { content: ['A', 'S', 'a'] };
      assert.deepStrictEqual(actual, expected);
    });

    it('should not sort the contents it has error', () => {
      const actual = sortContents({ error: true, content: ['a', 'S', 'A'] });
      const expected = { error: true, content: ['a', 'S', 'A'] };
      assert.deepStrictEqual(actual, expected);
    });
  });
});
