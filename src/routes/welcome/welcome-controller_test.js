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

  it('should ...', function () {
    expect().toBeDefined();// TODO:
  });
});
