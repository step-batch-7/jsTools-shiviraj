class Sort {
  constructor() {
    this.contents = [];
  }
  loadContents(files, fs) {
    this.contents = fs.readFileSync(files, 'utf8');
    this.contents = this.contents.split('\n');
    return this.contents;
  }
  sortContents() {
    return this.contents.sort();
  }
}

module.exports = Sort;
