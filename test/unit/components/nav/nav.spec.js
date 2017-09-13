'use strict';

describe('nav', () => {
  let scope;
  let element;
  let links;

  beforeEach(module('myApp'));
  beforeEach(module('templates')); // due to preprocessor
  beforeEach(inject(($rootScope, $compile, _LINKS_) => {
    links = _LINKS_;
    scope = $rootScope.$new();
    element = angular.element('<nav></nav>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('should render a list of nav items based on the LINKS constant', () => {
    var navLinks = element.find('a');
    _.each(navLinks, (link, i) => {
      expect(_.trim(link.text)).toBe(links[i].text);
    });
  });

});
