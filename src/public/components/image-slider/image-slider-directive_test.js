'use strict';

describe('Directive: bld-image-slider', function () {

  var $compile, $rootScope, element;

  beforeEach(module('bldApp'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    element = compileImageSlider();
  }));

  function compileImageSlider() {
    var template = '<bld-image-slider></bld-image-slider>';
    var element = $compile(angular.element(template))($rootScope);
    $rootScope.$digest();
    return element;
  }

  // ---  --- //

  it('should ...', function () {
    expect().toBeDefined();// TODO:
  });
});
