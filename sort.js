const fs = require('fs');
const { loadContents, sortContents, displayResult } = require('./src/sortLib');

const main = function() {
  const fileName = process.argv[2];
  const contents = loadContents(fileName, fs);
  const sortedContents = sortContents(contents);
  displayResult(contents);
};

main();
