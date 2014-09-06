'use strict';

describe('Controller: PhotoUploadCtrl', function () {

  // load the controller's module
  beforeEach(module('devMtnAppApp'));

  var PhotoUploadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhotoUploadCtrl = $controller('PhotoUploadCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
