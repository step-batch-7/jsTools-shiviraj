const fs = require('fs');
const ContentLoader = require('./src/loadContents');
const { parseUserArgs, sortContents } = require('./src/performSort');

const main = function() {
  const files = parseUserArgs(process.argv);
  const loadContents = new ContentLoader();
  let contents = loadContents.loadContents(files, fs);
  if (contents.error) console.error(contents.msg.join('\n'));
  if (contents.contents) {
    contents = sortContents(contents);
    console.log(contents.contents.join('\n'));
  }
};

main();
