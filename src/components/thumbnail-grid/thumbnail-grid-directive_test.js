'use strict';

describe('Directive: bld-thumbnail-grid', function () {

  var $compile, $rootScope, element;

  beforeEach(module('bldApp'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    element = compileThumbnailGrid();
  }));

  function compileThumbnailGrid() {
    var template = '<bld-thumbnail-grid></bld-thumbnail-grid>';
    var element = $compile(angular.element(template))($rootScope);
    $rootScope.$digest();
    return element;
  }

  // ---  --- //

  it('should ...', function () {
    expect().toBeDefined();// TODO:
  });
});
