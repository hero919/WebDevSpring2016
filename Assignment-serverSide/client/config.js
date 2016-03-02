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
                templateUrl: 'views/forms/forms.view.html',
                controller:'FormController'

            }).
            when('/register', {
                templateUrl: 'views/register/register.view.html',
                controller: 'RegisterController'

            }).
            when('/admin', {
                templateUrl: 'views/admin/admin.view.html'

            }).
            when('/user/:userId/form/:formId/fields', {
                templateUrl: 'views/field/field.view.html',
                controller: 'FieldController as model'
            }).
            when('/logout', {
                templateUrl: 'views/home/home.view.html'

            }).
            otherwise({
                redirectTo: 'home'
            });
    }
})();




