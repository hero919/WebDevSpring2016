/**
 * Created by zeqingzhang on 2/1/16.
 */
(function(){
    'use strict';
    angular.
        module('FormBuilderApp')
        .controller('ProfileController',ProfileController);

    function ProfileController(UserService,$rootScope,$scope){
        $scope.message = null;

        $scope.update = function(){
            var updatedUser = {
                "_id": $rootScope.user._id,
                "username": $scope.username,
                "password": $scope.password,
                "firstName": $scope.firstName,
                "lastName": $scope.lastName,
                "email": $scope.email

            };
            UserService.updateUser($rootScope.user._id, updatedUser,function(newUser){


                console.log("User has already updated! "+newUser.username);
                $rootScope.user = newUser;

                if(newUser){
                    $scope.message = 'User has already updated!';
                }else{
                    $scope.message = 'Unable to update the user!';
                }


            })




        }

    }


})();