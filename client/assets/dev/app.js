'use strict';
angular.module('myApp', [
    'ngRoute',
    'myApp.homeComponent',
])
.config(['$locationProvider', '$routeProvider', '$logProvider', function ($locationProvider, $routeProvider, $logProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/'});
    $logProvider.debugEnabled(true);
    $locationProvider.html5Mode(true);

}]);

