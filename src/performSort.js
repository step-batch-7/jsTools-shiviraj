const fs = require('fs');
const { validateArgs } = require('./validateArgs');
const { sortContents } = require('./sortContents');
const { loadContents } = require('./loadContents');
const { displayResult, displayError } = require('./displayOutput');
const { stdin } = process;

const showOutput = { result: displayResult, error: displayError };

const sortAndDisplay = function(contents) {
  let print = showOutput.error;
  if (!contents.error) {
    contents = sortContents(contents);
    print = showOutput.result;
  }
  print(contents);
};

const performSort = function(usrArgs) {
  const files = validateArgs(usrArgs);
  let contents = loadContents(files, fs);

  if (files.fileNames.length == 0) {
    stdin.on('data', data => {
      contents.contents.push(data.trim());
    });
  }
  if (files.fileNames.length != 0) sortAndDisplay(contents);

  stdin.setEncoding('utf8');
  stdin.on('end', function() {
    sortAndDisplay(contents);
  });

  stdin.end();
};

module.exports = { performSort };
