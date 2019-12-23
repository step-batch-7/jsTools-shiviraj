const fs = require('fs');
const {
  sortContents,
  loadContents,
  displayResult,
  displayError
} = require('./src/sortLib');

const main = function(usrArgs) {
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

main(process.argv);
