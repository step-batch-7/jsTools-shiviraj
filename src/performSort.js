const loadLines = require('./loadLines');

const parseUserArgs = userArgs => {
  const [, , fileName] = userArgs;
  return {fileName};
};

const performSort = (fileName, streamPicker, display) => {
  const inputStream = streamPicker.pick(fileName);
  const onFinish = ({lines, errorMsg}) => {
    let result = {errorMsg};
    if (!errorMsg) {
      result = {content: lines.sort().join('\n')};
    }
    display(result);
  };
  loadLines.byStream(inputStream, onFinish);
};

module.exports = {parseUserArgs, performSort};
