'use strict';

describe('Directive: bld-footer', function () {

  var $compile, $rootScope, element;

  beforeEach(module('bldApp'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    element = compileFooter();
  }));

  function compileFooter() {
    var template = '<bld-footer></bld-footer>';
    var element = $compile(angular.element(template))($rootScope);
    $rootScope.$digest();
    return element;
  }

  // ---  --- //

  it('should ...', function () {
    expect().toBeDefined();// TODO:
  });
});
