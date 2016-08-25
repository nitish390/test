angular.module('shivangiApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html'
                    //controller: 'HomeCtrl',
                    //controllerAs: 'home'
            })
            .when('/about', {
                templateUrl: 'views/about.html'
                    //controller: 'AboutCtrl',
                    //controllerAs: 'about'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html'
                    //controller: 'ContactCtrl',
                    //controllerAs: 'contact'
            })

        .when('/result', {
            templateUrl: 'views/result.html'
                //controller: 'ResultCtrl',
                //controllerAs: 'result'
        })


        .otherwise({
            redirectTo: '/home'
        });
    });
