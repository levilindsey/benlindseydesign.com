'use strict';

describe('Controller: WritingsCtrl', function () {

  var writings, scope;

  beforeEach(module('bldApp'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    writings = $controller('WritingsCtrl', {
      $scope: scope
    });
  }));

  // ---  --- //

  it('should ...', function () {
    expect().toBeDefined();
  });
});
