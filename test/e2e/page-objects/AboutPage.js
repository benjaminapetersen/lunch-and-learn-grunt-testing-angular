'use strict';

let Page = require('./Page').Page;

class AboutPage extends Page {
  constructor() {
    super();
  }
  getUrl() {
    return 'http://localhost:9001/#!/about';
  }
}

exports.AboutPage = AboutPage;
