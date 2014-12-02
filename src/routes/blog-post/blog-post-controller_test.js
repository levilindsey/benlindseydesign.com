'use strict';

describe('Controller: BlogPostCtrl', function () {

  var blogPost, scope;

  beforeEach(module('bldApp'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    blogPost = $controller('BlogPostCtrl', {
      $scope: scope
    })
  }));

  // ---  --- //

  it('should ...', function () {
    expect().toBeDefined();// TODO:
  });
});
