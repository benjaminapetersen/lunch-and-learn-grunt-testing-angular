'use strict';

let Page = require('./Page').Page;

class NonAngularPage extends Page {
  constructor() {
    super();
  }
  getUrl() {
    return 'http://localhost:9001/non-angular.html';
  }
}

exports.NonAngularPage = NonAngularPage;
