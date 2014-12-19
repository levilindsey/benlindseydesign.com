'use strict';

describe('Directive: bld-svg-icon', function () {

  var $compile, $rootScope, element;
  var iconId = 'thumbs-up';

  beforeEach(module('bldApp'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    element = compileSvgIcon(iconId);
  }));

  /**
   * @param {String} iconId
   */
  function compileSvgIcon(iconId) {
    var template = '<bld-svg-icon name="' + iconId + '"></bld-svg-icon>';
    var element = $compile(angular.element(template))($rootScope);
    $rootScope.$digest();
    return element;
  }

  // ---  --- //

  it('should display the SVG use tag properly', function () {
    //var element = compileSvgIcon(iconId);
    //var child = element.children();
    //
    //expect(child[0].tagName).toBe('use');
    //expect(child.attr('xlink:href')).toMatch(new RegExp(iconId));
    expect().toBeDefined();// TODO:
  });
});
