(function() {
  'use strict';

  var gnvjs = angular.module('gnvjs');

  gnvjs.controller('toolsController', function($scope, $http) {
    $scope.tools = [
      {'name': 'Mocha', 'url': 'http://mochajs.org'},
      {'name': 'Chai', 'url': 'http://chaijs.com'}
    ];
    /*$scope.tools = [];
    $http.get('api/tools').success(function(data) {
      $scope.tools = data;
    });*/
  });
})();
