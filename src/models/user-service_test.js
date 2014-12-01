'use strict';

describe('Service: User', function () {

  beforeEach(module('bldApp'));

  // ---  --- //

  it('should contain a User service', function () {
    inject(function (User) {
      expect(User).toBeDefined();
    });
  });

  it('should have exposed properties', function () {
    inject(function (User) {
      expect(User.getData).toBeDefined();
    });
  });

  // TODO: test the actual HTTP request logic
});
