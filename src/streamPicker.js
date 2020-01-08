class StreamPicker {
  constructor(fileStream, stdin) {
    this.fileStream = fileStream;
    this.stdin = stdin;
  }
  pick(fileName) {
    let stream = this.stdin;
    if (fileName) {
      stream = this.fileStream(fileName);
    }
    return stream;
  }
}

module.exports = StreamPicker;
