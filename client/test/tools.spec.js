(function() {
  'use strict';

  describe('toolsController', function() {
    var scope;
    var $httpBackend;

    beforeEach(angular.mock.module('gnvjs'));

    beforeEach(angular.mock.inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      $controller('toolsController', {
        $scope: scope
      });
    }));

    it('should have at least 2 tools', function() {
      expect(scope.tools).to.have.length.of.at.least(2);
    });

    it('should contain keys name and url', function() {
      for (var i = 0; i < scope.tools.length; i++) {
        expect(scope.tools[i]).to.contain.all.keys(['name', 'url']);
      }
    });
  });
})();
