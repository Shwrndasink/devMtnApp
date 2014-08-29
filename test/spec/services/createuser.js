'use strict';

describe('Service: createUser', function () {

  // load the service's module
  beforeEach(module('devMtnAppApp'));

  // instantiate service
  var createUser;
  beforeEach(inject(function (_createUser_) {
    createUser = _createUser_;
  }));

  it('should do something', function () {
    expect(!!createUser).toBe(true);
  });

});
