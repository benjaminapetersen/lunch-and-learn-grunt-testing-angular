'use strict';

let HomePage = require('../page-objects/HomePage').HomePage;

describe('HomePage', () => {
  it('should have a title', () => {
    var homePage = new HomePage();
    homePage.visit();
    var title = element(by.css('.title')).getText();
    expect(title).toBe('Home');
  });
});
