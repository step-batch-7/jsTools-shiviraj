const displayError = function(error) {
  console.error(error.msg.join('\n'));
};

const displayResult = function(result) {
  console.log(result.contents.join('\n'));
};

module.exports = { displayError, displayResult };
