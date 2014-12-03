'use strict';

describe('Controller: PageMissingCtrl', function () {

  var pageMissing, scope;

  beforeEach(module('bldApp'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    pageMissing = $controller('PageMissingCtrl', {
      $scope: scope
    });
  }));

  // ---  --- //

  it('should ...', function () {
    expect().toBeDefined();// TODO:
  });
});
