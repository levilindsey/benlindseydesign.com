'use strict';

describe('Directive: bld-nav-bar', function () {

  var $compile, $rootScope, element;

  beforeEach(module('bldApp'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    element = compileNavBar();
  }));

  function compileNavBar() {
    var template = '<bld-nav-bar></bld-nav-bar>';
    var element = $compile(angular.element(template))($rootScope);
    $rootScope.$digest();
    return element;
  }

  // ---  --- //

  it('should ...', function () {
    // TODO:

    expect(true).toBeTruthy();
  });
});
