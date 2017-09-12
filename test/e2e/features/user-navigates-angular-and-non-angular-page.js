'use strict';

let HomePage = require('../page-objects/homePage').HomePage;
let AboutPage = require('../page-objects/aboutPage').AboutPage;
let UsersPage = require('../page-objects/usersPage').UsersPage;
let NonIndexPage = require('../page-objects/nonIndexPage').NonIndexPage;

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
    // browser.ignoreSynchronization = true;
    var nonIndexPage = new NonIndexPage();
    //var ptor = protractor.getInstance();
    // var driver = ptor.driver;
    // driver.findElement(protractor.By.name(name));
    browser.ignoreSynchronization = true;
    nonIndexPage.visit();
    // driver.findElement(By.cssSelector(".title"));
    // var title = browser.driver.find(By.id('title'));

    // browser.driver.ignoreSynchronization = true;
    browser.driver.sleep(1000);

    // element(by.css('.title')).getText();
    // var title = driver.findElement(protractor.By.css('.title'));
    // var title = browser.driver.findElement(protractor.By.css('.title'));
    var title = browser.driver.findElement(by.css('.title'));

    title.getText().then((text) => {
      expect(text).toBe('This is not the index');
    });
    // set the sync back for tests that follow
    browser.ignoreSynchronization = false;

  });
});
