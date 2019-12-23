const loadContents = function(files, fs) {
  const fileName = files[0];
  if (!fs.existsSync(fileName)) {
    return { msg: ['sort: No such file or directory'], isError: true };
  }
  const fileContents = fs.readFileSync(fileName, 'utf8');
  return { contents: fileContents.split('\n') };
};

const sortContents = function(content) {
  return { contents: content.contents.sort() };
};

const displayError = function(error) {
  console.error(error.msg.join('\n'));
};

const displayResult = function(result) {
  console.log(result.contents.join('\n'));
};

module.exports = { sortContents, loadContents, displayResult, displayError };
