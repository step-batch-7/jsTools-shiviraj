const {createReadStream} = require('fs');
const {parseUserArgs, performSort} = require('./src/performSort');
const StreamPicker = require('./src/streamPicker');

const display = data => {
  if (!data.errorMsg) {
    process.stdout.write(data.content);
    return;
  }
  process.stderr.write(data.errorMsg);
};

const main = () => {
  const {fileName} = parseUserArgs(process.argv);
  const streamPicker = new StreamPicker(createReadStream, process.stdin);
  performSort(fileName, streamPicker, display);
};

main();
