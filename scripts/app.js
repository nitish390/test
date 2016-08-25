var app = angular.module('app',['ngRoute']).config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl : 'views/home.html',
            //controller  : 'profilecontrol'
        })
        .when('/contact', {
            templateUrl : 'views/contact.html',
           // controller  : 'registerStudent'
        })
        .when('/about', {
            templateUrl : 'views/about.html',
            //controller  : ''
        }) 
        .when('/result', {
            templateUrl : 'views/result.html',
            //controller  : 'loginStudent'
        })
        
        .otherwise({
        redirectTo: '/'
       
      });
});