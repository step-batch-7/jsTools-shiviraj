const fs = require('fs');
const {
  parseUserArgs,
  loadContents,
  sortContents
} = require('./src/performSort');
const { stdin, stderr, stdout } = process;

const main = () => {
  const fileNames = parseUserArgs(process.argv);
  const contents = loadContents(fileNames, fs, stdin);
  const sortedContents = sortContents(contents);
  let print = console.log;
  if (!sortedContents.error) print = console.error;
  print(sortedContents.content.join('\n'));
};

main();
