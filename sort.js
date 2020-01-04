const {createReadStream} = require('fs');
const {parseUserArgs, performSort} = require('./src/performSort');

const display = data => {
  if (!data.errorMsg) {
    process.stdout.write(data.content);
    return;
  }
  process.stderr.write(data.errorMsg);
};

const main = () => {
  const {fileName} = parseUserArgs(process.argv);
  performSort(fileName, createReadStream, process.stdin, display);
};

main();
