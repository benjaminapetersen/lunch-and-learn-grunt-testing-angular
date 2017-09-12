exports.nonAngular = function(func) {
  browser.ignoreSynchronization = true;
  func();
  browser.ignoreSynchronization = false;
};
