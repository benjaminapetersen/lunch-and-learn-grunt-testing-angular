'use strict';

let HomePage = require('../page-objects/homePage').HomePage;
let AboutPage = require('../page-objects/aboutPage').AboutPage;
let UsersPage = require('../page-objects/usersPage').UsersPage;
let NonAngularPage = require('../page-objects/nonAngularPage').NonAngularPage;

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
      var title = browser.driver.findElement(by.css('.title'));
      title.getText().then((text) => {
        expect(text).toBe('This is not the index');
      });
    });

  });
});
