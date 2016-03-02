/**
 * Created by zeqingzhang on 1/22/16.
 */

(function(){
    "use strict";
    angular.
        module('FormBuilderApp')
        .controller('HeaderController',HeaderController)

    function HeaderController($scope, $location,$rootScope) {
        $scope.$location = $location;

        $scope.logout = function(){
            $rootScope.user = null;
            $location.path('/logout');
        }
    }

})();











//"use strict";
//
//appRoute.controller("HeaderController", HeaderController = function($scope, $location){
//
//
//
//})

