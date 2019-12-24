class ContentLoader {
  constructor() {
    this.contents = [];
  }
  initialize(files, fs) {
    this.fs = fs;
    this.data = files;
    this.fileNames = files.fileNames;
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
  readAllContents() {
    if (!this.areAllFilesExists()) {
      this.data.msg = ['sort: No such file or directory'];
      this.data.error = true;
      return this.data;
    }
    this.data.contents = this.readContents();
    return this.data;
  }
  loadContents(files, fs) {
    this.initialize(files, fs);
    return this.readAllContents();
  }
}

module.exports = ContentLoader;
