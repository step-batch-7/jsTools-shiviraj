const parseUserArgs = function(userArgs) {
  return { fileNames: userArgs.slice(2) };
};

const sortContents = function(content) {
  return { contents: content.contents.sort() };
};

const displayError = function(errorMsg) {
  console.error(errorMsg.join('\n'));
};

module.exports = { parseUserArgs, sortContents };
