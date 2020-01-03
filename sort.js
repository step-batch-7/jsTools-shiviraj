const { createReadStream } = require('fs');
const { parseUserArgs, performSort } = require('./src/performSort');

const display = data => {
  if (!data.errorMsg) {
    process.stdout.write(data.content);
    return;
  }
  process.stderr.write(data.errorMsg);
};

const main = () => {
  const { fileName } = parseUserArgs(process.argv);
  const contentLoader = { createReadStream, stdin: process.stdin };
  performSort(fileName, contentLoader, display);
};

main();
