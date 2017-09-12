'use strict';

let Page = require('./Page').Page;

class HomePage extends Page {
  constructor() {
    super();
  }
  getUrl() {
    return 'http://localhost:9001/#!/home';
  }
}

exports.HomePage = HomePage;
