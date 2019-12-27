const parseUserArgs = userArgs => {
  return userArgs.slice(2);
};

const contentLoader = fs => {
  return (wholeContents, file) => {
    if (!fs.existsSync(file)) {
      wholeContents.error = true;
      return wholeContents;
    }
    const fileContent = fs.readFileSync(file, 'utf8');
    wholeContents.content.push(...fileContent.split('\n'));
    return wholeContents;
  };
};

const loadContents = (fileNames, fs) => {
  const contents = fileNames.reduce(contentLoader(fs), {
    content: []
  });
  if (contents.error) contents.content = ['sort: No such file or directory'];
  return contents;
};

const sortContents = contents => {
  if (contents.error) return contents;
  contents.content.sort();
  return contents;
};

module.exports = { parseUserArgs, loadContents, sortContents };
