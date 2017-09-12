'use strict';

let HomePage = require('../page-objects/HomePage').HomePage;
let AboutPage = require('../page-objects/AboutPage').AboutPage;
let UsersPage = require('../page-objects/UsersPage').UsersPage;
let NonAngularPage = require('../page-objects/NonAngularPage').NonAngularPage;
let CreateUserPage = require('../page-objects/CreateUserPage').CreateUserPage;

let nonAngular = require('../helpers/nonAngular').nonAngular;
// var webdriver = require('selenium-webdriver');
let protractor = require('protractor');
// require('../node_modules/protractor/jasminewd');

describe('Navigating between pages', () => {
  it('should be possible to navigate between angular and non-angular pages', () => {
    var homePage = new HomePage();
    homePage.visit();
    var aboutPage = new AboutPage();
    aboutPage.visit();
    var usersPage = new UsersPage();
    usersPage.visit();

    // swap down into webdriver for non-angular pages
    nonAngular(() => {
      var nonAngularPage = new NonAngularPage();
      nonAngularPage.visit();
      browser.driver.findElement(by.css('.title')).getText().then((text) => {
        expect(text).toBe('This is not the index');
      });
    });

    // back to angular pages
    let user = {name: 'Jethro', email: 'Jethro@Jacobs.com'};
    let createUserPage = new CreateUserPage();

    createUserPage.visit();
    browser.sleep(500);
    createUserPage.setName(user.name);
    createUserPage.setEmail(user.email);
    createUserPage.submit();
    expect(createUserPage.getSavedName()).toEqual(user.name);
    expect(createUserPage.getSavedEmail()).toEqual(user.email);

  });
});
