const { assert } = require('chai');
const { validateArgs } = require('../src/validateArgs');

describe('Validate Args', () => {
  it('should check for one file', () => {
    const actual = validateArgs(['node', 'sort.js', 'filename']);
    assert.deepStrictEqual(actual, { fileNames: ['filename'] });
  });

  it('should check for more than one file', () => {
    const actual = validateArgs(['node', 'sort.js', 'file1', 'file2']);
    assert.deepStrictEqual(actual, { fileNames: ['file1', 'file2'] });
  });
});
