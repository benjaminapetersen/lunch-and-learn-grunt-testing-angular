'use strict';

class Page {
  constructor() {

  }
  getUrl() {
    // fill this w/subclasses
  }
  visit() {
    return browser.get(this.getUrl());
  }
}

exports.Page = Page;
