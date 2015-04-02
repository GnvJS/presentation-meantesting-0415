(function() {
  'use strict';

  var gnvjs = angular.module('gnvjs', ['ngRoute']);

  gnvjs.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/home.html',
        controller: 'homeController'
      })
      .when('/tools', {
        templateUrl: '/views/tools.html',
        controller: 'toolsController'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase:false
    });
  });
})();
