var app = angular.module("spaApp", ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'Fragments/home.html',
        controller: 'homeController'
    }).when('/about', {
        templateUrl: 'Fragments/about.html',
        controller: 'aboutController'
    }).when('/career', {
        templateUrl: 'Fragments/career.html',
        controller: 'careerController'
    })
}]);