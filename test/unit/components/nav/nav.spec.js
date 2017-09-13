'use strict';

describe('nav', () => {
  let scope;
  let element;
  let LINKS;
  let componentController;

  beforeEach(module('myApp'));
  beforeEach(module('templates')); // due to preprocessor
  beforeEach(inject(($rootScope, $compile, _$componentController_, _LINKS_) => {
    componentController = _$componentController_;
    LINKS = _LINKS_;
    scope = $rootScope.$new();
    element = angular.element('<nav></nav>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('should render a list of nav items based on the LINKS constant', () => {
    var navLinks = element.find('a');
    _.each(navLinks, (link, i) => {
      expect(_.trim(link.text)).toBe(LINKS[i].text);
    });
  });

  it('should have a controller with a default prop', () => {
    let bindings = {};
    let ctrl = componentController('nav', null, bindings);
    expect(ctrl.fakeThingToTest).toEqual('foo');
  });

  // this just tests the existence of links again, however we
  // aren't depending on the rendering of the links, but just
  // an assignment of an array to the controller.
  it('should have a controller with a links property', () => {
    let bindings = {};
    let ctrl = componentController('nav', null, bindings);
    expect(ctrl.links).toEqual(LINKS);
  });

});
