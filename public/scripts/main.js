define('main', [], function(angular) {

  var angular = require("angular");
  var myModule = angular.module("myModule", ['ngRoute']);

  myModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'index/index.vash',
      controller: 'indexController'
    }).otherwise({
      redirectTo: '/'
    });
  }]);

  return myModule;

});
