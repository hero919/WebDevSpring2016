/**
 * Created by zeqingzhang on 1/30/16.
 */

(function(){
    'use strict';
    angular
        .module('FormBuilderApp')
        .controller("FormController",FormController);

    function FormController(FormService,$rootScope,$scope){

        $scope.$location = $location;
        $scope.form = {};
        $scope.addForm = addForm;
        $scope.selectForm = selectForm;
        $scope.deleteForm = deleteForm;
        $scope.updateForm = updateForm;



        function loadAllFormsForUser() {
            console.log("load all form user");
            var userId = null;
            if ($rootScope.user) {
                userId = $rootScope.user._id;
            }
            console.log(userId);
            FormService.findAllFormsForUser(userId).then(function(forms) {
                //console.log("There is no forms");
                console.log(forms);
                $scope.forms = forms
            })
        }

        loadAllFormsForUser();


        function addForm(){
            FormService.createFormForUser($rootScope.user._id, $scope.newForm).then(function(response){
                return response;
            })

        }


        function updateForm(){
            var newForm = {};
            for (var key in $scope.newForm) {
                newForm[key] = $scope.newForm[key];
            }
            FormService.updateFormById($scope.form._id, newForm).then(function(form) {
                $scope.form = form;
                loadAllFormsForUser()
            })
        }





        function deleteForm(index){
            var objectId = $scope.forms[index]._id;
            FormService.deleteFormById(objectId).then(function(leftForms){
                loadAllFormsForUser();
            });
        }

        function selectForm(index){
            $scope.form = {};
            for (var key in $scope.forms[index]) {
                $scope.form[key] = $scope.forms[index][key];
            }
        }

    }
})();




//"use strict";
//appRoute.controller("FormController", FormController = function (FormService,$scope){
//    $scope.formsList = [];
//
//
//    $scope.deleteForm = function(index){
//        console.log(index);
//        FormService.forms
//    }
//
//
//})