const fs = require('fs');
const { validateArgs } = require('./validateArgs');
const { sortContents } = require('./sortContents');
const Load = require('./loadContents');
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
  const load = new Load(files, fs);
  let contents = load.loadContents();

  if (files.fileNames.length == 0) {
    stdin.on('data', data => {
      data = data.trim().split('\n');
      contents.contents.push(...data);
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
