/**
 * Created by zeqingzhang on 1/30/16.
 */

(function(){
    'use strict';
    angular
        .module('FormBuilderApp')
        .controller("FormController",FormController);

    function FormController(FormService,$rootScope,$scope){
        var editForm = {};
        var nForm = null;
        $scope.errormessage = "";
        //console.log($scope.newForm);

        FormService.findAllFormsForUser($rootScope.user._id, function (FoundForms) {
            $scope.forms = FoundForms;
        });


        function loadAllForms() {
            FormService.findAllFormsForUser($rootScope.user._id, function (FoundForms) {
                console.log(FoundForms);
                $scope.forms = FoundForms;
            });
        }

        $scope.addForm = function(){
            var createObject = $scope.newForm;
            FormService.createFormForUser($rootScope.user._id, createObject, function(newform){
                if(newform=='Error'){
                    console.log('Duplicate title');
                    $scope.errormessage =  "Duplicate title";
                }else{
                    $scope.errormessage = "";
                }
                console.log(newform);
                loadAllForms();
            });

        };

        $scope.updateForm = function(){
            console.log(editForm);
            editForm.title = $scope.newForm.title;

            console.log("The new form that will update is: "+ editForm);
            console.log(editForm);
            FormService.updateFormById(editForm._id, editForm, function(newF){
                console.log(newF);
                $scope.newForm.title = "";
                loadAllForms();
            });



        };

        $scope.deleteForm = function(index){
            var objectId = $scope.forms[index]._id;
            FormService.deleteFormById(objectId,function(leftForms){
                console.log(leftForms);
            });
            loadAllForms();



        };

        $scope.selectForm = function(index){
            console.log("The id of the chosen form is "+ $scope.forms[index]._id);
            console.log("The title of the chosen form is "+ $scope.forms[index].title);


            editForm = $scope.forms[index];
            $scope.newForm = {}
            console.log($scope.newForm.title);
            $scope.newForm.title = $scope.forms[index].title;
        };
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