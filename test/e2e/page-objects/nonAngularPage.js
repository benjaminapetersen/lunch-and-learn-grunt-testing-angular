'use strict';

let Page = require('./page').Page;

class NonAngularPage extends Page {
  constructor() {
    super();
  }
  getUrl() {
    return 'http://localhost:9001/non-angular.html';
  }
}

exports.NonAngularPage = NonAngularPage;
