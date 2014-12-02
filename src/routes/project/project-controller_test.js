'use strict';

describe('Controller: ProjectCtrl', function () {

  var project, scope;

  beforeEach(module('bldApp'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    project = $controller('ProjectCtrl', {
      $scope: scope
    })
  }));

  // ---  --- //

  it('should ...', function () {
    expect().toBeDefined();// TODO:
  });
});
