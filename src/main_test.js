'use strict';

describe('Module: bldApp', function () {

  var rootScope;

  beforeEach(module('bldApp'));

  beforeEach(inject(function ($rootScope) {
    rootScope = $rootScope;
  }));

  // ---  --- //

  it('should attach routeState to the rootScope', function () {
    expect(rootScope.routeState).toBeDefined();
  });
});
