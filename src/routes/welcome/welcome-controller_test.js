'use strict';

describe('Controller: WelcomeCtrl', function () {

  var welcome, scope;

  beforeEach(module('bldApp'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    welcome = $controller('WelcomeCtrl', {
      $scope: scope
    });
  }));

  // ---  --- //

  it('should attach appName to the controller object', function () {
    expect(welcome.appName).toBeDefined();
  });
});
