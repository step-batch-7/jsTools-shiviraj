const fs = require('fs');
const Sort = require('./src/sortLib');
const { displayResult, displayError } = require('./src/displayOutput');

const main = function() {
  const sort = new Sort();
  sort.loadContents(process.argv[2], fs);
  const sortedContents = sort.sortContents();
  displayResult(sortedContents);
};

main();
