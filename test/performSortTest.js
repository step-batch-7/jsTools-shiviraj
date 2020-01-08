const {assert} = require('chai');
const sinon = require('sinon');
const {parseUserArgs, performSort} = require('../src/performSort');
const loadLines = require('../src/loadLines');

describe('Perform Sort', () => {
  describe('Parse User Args', () => {
    it('should parse the user Args ', () => {
      const actual = parseUserArgs(['node', 'sort.js', 'sample.txt']);
      assert.deepStrictEqual(actual, {fileName: 'sample.txt'});
    });

    it('should parse the user Args if no file is given ', () => {
      const actual = parseUserArgs(['node', 'sort.js']);
      assert.deepStrictEqual(actual, {fileName: undefined});
    });
  });

  describe('perform sort', () => {
    beforeEach(() => {
      sinon.replace(loadLines, 'byStream', sinon.fake());
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should call loadLines by fileInputStream if file is given', () => {
      const stream = {setEncoding: sinon.fake(), on: sinon.fake()};
      const streamPicker = {pick: sinon.fake.returns(stream)};
      performSort('file.txt', streamPicker, sinon.fake());
      assert(loadLines.byStream.firstCall.calledWith(stream));
    });

    it('should call loadLines by stdinStream if file is not given', () => {
      const stdin = {setEncoding: sinon.fake(), on: sinon.fake()};
      const streamPicker = {pick: sinon.fake.returns(stdin)};
      performSort(undefined, streamPicker, sinon.fake());
      assert(loadLines.byStream.firstCall.calledWith(stdin));
    });
  });
});
