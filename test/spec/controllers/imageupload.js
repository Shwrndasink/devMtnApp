'use strict';

describe('Controller: ImageuploadCtrl', function () {

  // load the controller's module
  beforeEach(module('devMtnAppApp'));

  var ImageuploadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ImageuploadCtrl = $controller('ImageuploadCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
