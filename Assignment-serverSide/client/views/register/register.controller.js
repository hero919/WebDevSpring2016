/**
 * Created by zeqingzhang on 2/1/16.
 */
(function(){
    "use strict";
    angular.
        module('FormBuilderApp')
        .controller('RegisterController',RegisterController);

    function RegisterController(UserService, $rootScope, $location,$scope) {

        //var vm = this;



        $scope.register =
                function (){
                    if ($scope.password === $scope.verifyPassword) {
                        var newUser = {
                            "username": $scope.username,
                            "password": $scope.password,
                            "email": $scope.email
                        };
                        UserService.createUser(newUser).then(function(user){
                                console.log(user);
                                $rootScope.newUser = user;
                                $location.url("/profile");
                            }
                        );


                    }
                    else{
                        alert("The password is not the same as verified password.");
                    }
                }
        }




})();
