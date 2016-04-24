require.config({
  paths: {
    angular: '../lib/angular/angular',
    angularRoute: '../lib/angular-route/angular-route',
    main: 'main',
    indexController: 'index-controller'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    angularRoute: {
      deps: ['angular']
    }
  }
});

require(["angular", "angularRoute"], function() {
  require(['main', 'indexController'], function(myModule, indexController) {
    myModule.controller('indexController', ['$scope', indexController]);
    angular.bootstrap(document, ['myModule']);
  });
});