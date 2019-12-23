const displayError = function(error) {
  console.error(error.join('\n'));
};

const displayResult = function(result) {
  console.log(result.join('\n'));
};

module.exports = { displayResult, displayError };
