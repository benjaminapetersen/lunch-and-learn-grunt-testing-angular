'use strict';

let Page = require('./page').Page;

class NonIndexPage extends Page {
  constructor() {
    super();
  }
  getUrl() {
    return 'http://localhost:9001/not-index.html';
  }
}

exports.NonIndexPage = NonIndexPage;
