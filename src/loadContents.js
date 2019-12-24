class Load {
  constructor(files, fs) {
    this.fs = fs;
    this.data = files;
    this.fileNames = files.fileNames;
    this.contents = [];
  }
  areAllFilesExists() {
    const result = this.fileNames.filter(file => !this.fs.existsSync(file));
    return result.length == 0;
  }
  readContents() {
    this.fileNames.map(file => {
      const content = this.fs.readFileSync(file, 'utf8');
      this.contents.push(...content.split('\n'));
    });
    return this.contents;
  }
  loadContents() {
    if (!this.areAllFilesExists())
      return { msg: ['sort: No such file or directory'], error: true };
    this.data.contents = this.readContents();
    return this.data;
  }
}

module.exports = Load;
