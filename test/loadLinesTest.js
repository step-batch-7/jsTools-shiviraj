const sinon = require('sinon');
const assert = require('chai').assert;
const {byStream} = require('../src/loadLines');

describe('Load Lines', () => {
  it('should load lines by stream and send to callBack', done => {
    const readStream = {on: sinon.fake()};
    const callBack = sinon.fake();
    byStream(readStream, callBack);
    assert(readStream.on.firstCall.calledWith('error'));
    assert(readStream.on.secondCall.calledWith('data'));
    assert(readStream.on.thirdCall.calledWith('end'));
    readStream.on.firstCall.lastArg();
    assert(
      callBack.firstCall.calledWith({
        errorMsg: 'sort: No such file or directory'
      })
    );
    readStream.on.secondCall.lastArg('a\nb\nc');
    readStream.on.thirdCall.lastArg();
    assert(callBack.secondCall.calledWith({lines: 'a\nb\nc'.split('\n')}));
    done();
  });
});
