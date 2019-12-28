const fs = require('fs');
const {
  parseUserArgs,
  loadContents,
  sortContents
} = require('./src/performSort');
const { stdout, stderr } = process;

const main = () => {
  const fileNames = parseUserArgs(process.argv);
  const contents = loadContents(fileNames, fs);
  const sortedContents = sortContents(contents);
  const result = sortedContents.content.join('\n');
  let display = stdout;
  if (sortedContents.error) {
    display = stderr;
  }
  display.write(result);
};

main();
