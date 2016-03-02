/**
 * Created by zeqingzhang on 1/22/16.
 */

(function () {
    "use strict";
    angular.module('FormBuilderApp')
        .config(config);

    function config($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'views/home/home.view.html'


            }).
            when('/login', {
                templateUrl: 'views/login/login.view.html',
                controller: 'LoginController'
            }).
            when('/profile', {
                templateUrl: 'views/profile/profile.view.html',
                controller: 'ProfileController'

            }).

            when('/forms', {
                templateUrl: 'views/form/forms.view.html',
                controller:'FormController'

            }).
            when('/register', {
                templateUrl: 'views/register/register.view.html',
                controller: 'RegisterController'

            }).
            when('/admin', {
                templateUrl: 'views/admin/admin.view.html'

            }).
            when('/form-fields', {
                templateUrl: 'views/form/form-fields.view.html'
            }).
            when('/logout', {
                templateUrl: 'views/home/home.view.html'

            }).
            otherwise({
                redirectTo: 'home'
            });
    }
})();

//appRoute.config(['$routeProvider',
//    function ($routeProvider) {
//        $routeProvider.
//            when('/home', {
//                templateUrl: 'views/home/home.view.html'
//
//            }).
//            when('/login', {
//                templateUrl: 'views/users/login.view.html'
//
//
//            }).
//            when('/profile', {
//                templateUrl: 'views/users/profile.html'
//
//            }).
//
//            when('/forms', {
//                templateUrl: 'views/form/forms.view.html'
//
//            }).
//            when('/register', {
//                templateUrl: 'views/users/register.html'
//
//            }).
//            when('/admin', {
//                templateUrl: 'views/admin/admin.view.html'
//
//            }).
//            when('/forms', {
//                templateUrl: 'views/form/forms.view.html'
//            }).
//            when('/form-fields', {
//                templateUrl: 'views/form/form-fields.view.html'
//            }).
//            otherwise({
//                redirectTo: 'home'
//            });
//    }]);



