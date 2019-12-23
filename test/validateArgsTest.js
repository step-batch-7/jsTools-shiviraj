const { assert } = require('chai');
const { validateArgs } = require('../src/validateArgs');

describe('Validate Args', () => {
  it('should validate if one file is present', () => {
    const actual = validateArgs(['node', 'sort.js', 'filename']);
    assert.deepStrictEqual(actual, { fileNames: ['filename'] });
  });

  it('should validate if more than one file', () => {
    const actual = validateArgs(['node', 'sort.js', 'file1', 'file2']);
    assert.deepStrictEqual(actual, { fileNames: ['file1', 'file2'] });
  });
});
