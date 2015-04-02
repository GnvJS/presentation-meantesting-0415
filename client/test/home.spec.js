(function() {
  'use strict';

  describe('homeController', function() {
    var scope;
    var $httpBackend;

    beforeEach(angular.mock.module('gnvjs'));

    beforeEach(angular.mock.inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      $controller('homeController', {
        $scope: scope
      });
    }));

    it('should have variable message = "Hello GainesvilleJS"', function() {
      expect(scope.message).to.equal('Hello GainesvilleJS');
    });
  });
})();
