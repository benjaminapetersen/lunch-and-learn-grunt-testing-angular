'use strict';

describe('test.spec', function() {
  it('is a test', function() {
    var foo;
    var bar = null;
    expect(true).toBe(true);
    expect(1).toBeTruthy();
    expect(false).toBeFalsy();
    expect(foo).toBeUndefined();
    expect(bar).toBeNull();
    expect(1).toBeDefined();
    expect(1).not.toBe(null);
  });
});
