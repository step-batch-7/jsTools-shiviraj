const fs = require('fs');
const { validateArgs } = require('./validateArgs');
const { sortContents, loadContents } = require('./loadContents');
const { displayResult, displayError } = require('./displayOutput');

const showOutput = { result: displayResult, error: displayError };

const performSort = function(usrArgs) {
  const files = validateArgs(usrArgs);
  let contents = loadContents(files, fs);
  let print = showOutput.error;
  if (!contents.error) {
    contents = sortContents(contents);
    print = showOutput.result;
  }
  print(contents);
};

module.exports = { performSort };
