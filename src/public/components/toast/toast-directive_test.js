'use strict';

describe('Directive: bld-toast', function () {

  var $compile, $rootScope, element;
  var text = 'Test Toast';
  var width = 1000;
  var duration = 1000;

  beforeEach(module('bldApp'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    element = compileToast(text, width, duration);
  }));

  /**
   * @param {String} text
   * @param {Number} width
   * @param {Number} duration
   */
  function compileToast(text, width, duration) {
    var template = '<bld-toast text="' + text + '" width="' + width + '" duration="' + duration + '"></bld-toast>';
    var element = $compile(angular.element(template))($rootScope);
    $rootScope.$digest();
    return element;
  }

  // ---  --- //

  it('should display the notification text properly', function () {
    expect(element.html()).toMatch(new RegExp(text));
  });

  it('should set the width properly', function () {
    expect(element.css('width')).toBe(width + 'px');
  });

  // TODO: test that the element is removed after the duration is finished
});
