const {assert} = require('chai');
const sinon = require('sinon');
const StreamPicker = require('../src/streamPicker');

describe('Stream Picker', () => {
  it('Should pick the file Stream if file is present', () => {
    const fileStream = sinon.stub();
    const streamPicker = new StreamPicker(fileStream, {});
    fileStream.withArgs('myFile').returns(fileStream);
    assert.strictEqual(streamPicker.pick('myFile'), fileStream);
  });
  it('Should pick the stdin Stream if file is absent', () => {
    const stdin = sinon.stub();
    const streamPicker = new StreamPicker({}, stdin);
    stdin.withArgs().returns(stdin);
    assert.strictEqual(streamPicker.pick(), stdin);
  });
});
