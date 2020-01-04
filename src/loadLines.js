const byStream = (readStream, onFinish) => {
  let content = '';
  readStream.on('error', () => {
    onFinish({errorMsg: 'sort: No such file or directory'});
  });

  readStream.on('data', data => {
    content += data;
  });

  readStream.on('end', () => {
    onFinish({lines: content.split('\n')});
  });
};

module.exports = {byStream};
