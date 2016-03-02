/**
 * Created by zeqingzhang on 1/23/16.
 */

(function(){
    'use strict';
    angular.
        module('FormBuilderApp')
        .controller("LoginController",LoginController);



    function LoginController(UserService, $rootScope, $location,$scope){

       $scope.login =
            function(){
                console.log('abc');
            UserService.findUserByUsernameAndPassword($scope.username, $scope.password).then(function(user){
                if(user !== null) {
                    console.log(user);
                    console.log("logged in");
                    $rootScope.user = user;
                    $location.url('/profile');
                }else{
                    console.log("Can't find the user");

                }
            })
        }
    }

})();



//"use strict";
//
//appRoute.controller("LoginController", LoginController = function(UserService, $scope){
//
//    $scope.login = function(user){
//        if(UserService.findUserByUsernameAndPassword(user.username, user.password,callback) != null){
//            $rootScope.user = user;
//
//            $location.url("/profile")
//
//
//        }
//
//    }
//});