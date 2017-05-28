const app = angular.module('myApp', ['ui.router', 'ui.bootstrap'])

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('view1', {
        url: '/view1',
        templateUrl: 'templates/view1.html',
        controller: 'view1Ctrl'
      })

      .state('view2', {
        url: '/view2/:id/:userID',
        templateUrl: 'templates/view2.html',
        controller: 'view2Ctrl'
      })

      .state('view3', {
        url: '/view3',
        templateUrl: 'templates/view3.html',
        controller: 'view3Ctrl'
      });

    $urlRouterProvider.otherwise('/view1');
  });
