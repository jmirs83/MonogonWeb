(function() {

  "use strict";

  var App = angular.module("App", [
    "App.services",
    "App.directives",
    "App.filters",
    "App.controllers",
    "ngRoute",
    "ngResource",
    "ngSanitize",
    "ngAnimate"
  ]);

  App.config(function ($routeProvider) {
    $routeProvider
      .when('/view1', {
           templateUrl: 'view/view1.html'
      })
      .when('/view2', {
           templateUrl: 'view/view2.html'
      })
      .otherwise({redirectTo : 'view1'});
  });

}());