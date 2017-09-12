'use strict';

let Page = require('./Page').Page;

class CreateUserPage extends Page {
  constructor(user) {
    super();
    this.dummyUser = user || {
      name: 'Controy',
      email: 'Conroy@Cage.com'
    };
  }
  getUrl() {
    return 'http://localhost:9001/#!/create-user';
  }
  setName(name) {
    // element(by.model('$ctrl.user.name')).sendKeys(name || this.dummyUser.name);
    element(by.id('name')).sendKeys(name || this.dummyUser.name);
  }
  setEmail(email) {
    // element(by.model('$ctrl.user.email')).sendKeys(email || this.dummyUser.email);
    element(by.id('email')).sendKeys(email || this.dummyUser.email);
  }
  reset() {
    element(by.id('reset')).click();
  }
  submit() {
    element(by.id('submit')).click();
  }
  getSavedName() {
    return element(by.id('saved-user-name')).getText();
  }
  getSavedEmail() {
    return element(by.id('saved-user-email')).getText();
  }
}

exports.CreateUserPage = CreateUserPage;
