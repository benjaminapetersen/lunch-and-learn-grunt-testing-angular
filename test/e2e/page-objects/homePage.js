'use strict';

let Page = require('./page').Page;

class HomePage extends Page {
  constructor() {
    super();
  }
  getUrl() {
    return 'http://localhost:9001/#!/home';
  }
}

exports.HomePage = HomePage;
