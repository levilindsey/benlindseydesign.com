'use strict';

describe('Directive: bld-markdown-block', function () {

  var $compile, $rootScope, element;

  beforeEach(module('bldApp'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    element = compileMarkdownBlock();
  }));

  function compileMarkdownBlock() {
    var template = '<bld-markdown-block></bld-markdown-block>';
    var element = $compile(angular.element(template))($rootScope);
    $rootScope.$digest();
    return element;
  }

  // ---  --- //

  it('should ...', function () {
    expect().toBeDefined();// TODO:
  });
});
