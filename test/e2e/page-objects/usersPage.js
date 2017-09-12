'use strict';

let Page = require('./page').Page;

class UsersPage extends Page {
  constructor() {
    super();
  }
  getUrl() {
    return 'http://localhost:9001/#!/users';
  }
}

exports.UsersPage = UsersPage;
