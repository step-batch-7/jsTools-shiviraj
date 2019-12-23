const validateArgs = function(userArgs) {
  return { fileNames: userArgs.slice(2) };
};

module.exports = { validateArgs };
