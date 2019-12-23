const loadContents = function(files, fs) {
  const { fileNames } = files;
  const contents = [];
  for (file in fileNames) {
    if (!fs.existsSync(fileNames[file])) {
      return { msg: ['sort: No such file or directory'], error: true };
    }
    const content = fs.readFileSync(fileNames[file], 'utf8');
    contents.push(...content.split('\n'));
  }
  files = { contents };
  return files;
};

const sortContents = function(content) {
  return { contents: content.contents.sort() };
};

module.exports = { sortContents, loadContents };
