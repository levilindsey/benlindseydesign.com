'use strict';

describe('Controller: ProjectsCtrl', function () {

  var projects, scope;

  beforeEach(module('bldApp'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    projects = $controller('ProjectsCtrl', {
      $scope: scope
    });
  }));

  // ---  --- //

  it('should ...', function () {
    expect().toBeDefined();// TODO:
  });
});
