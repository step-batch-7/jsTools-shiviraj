const fs = require('fs');
const { sortContents, loadContents } = require('./sortContents');
const { displayResult, displayError } = require('./displayOutput');

const performSort = function(usrArgs) {
  const showOutput = { result: displayResult, error: displayError };
  const fileName = usrArgs.slice(2);
  let contents = loadContents(fileName, fs);
  let print = showOutput.error;
  if (!contents.isError) {
    contents = sortContents(contents);
    print = showOutput.result;
  }
  print(contents);
};

module.exports = { performSort };
