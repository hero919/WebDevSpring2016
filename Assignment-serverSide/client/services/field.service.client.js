/**
 * Created by zeqingzhang on 2/19/16.
 */

(function(){
    "use strict";
   angular.module('FormBuilderApp')
       .factory('FieldService', FieldService);

    function FieldService($http, $q){

        var service = {
            createFieldForForm: createFieldForForm,
            getFieldsForForm: getFieldsForForm,
            getFieldForForm : getFieldForForm,
            deleteFieldFromForm: deleteFieldFromForm,
            updateField: updateField
        };

        return service;


        function createFieldForForm(formId, field){

            var deferred = $q.defer();

            $http.post('/api/assignment/form/'+ formId + '/field').success(function(response){
                deferred.resolve(response);
            });
            deferred.promise;
        }


        function getFieldsForForm(formId){
            var deferred = $q.defer();
            $http.get('/api/assignment/form/'+ formId+ '/field/:fieldId').success(function(response){
                deferred.resolve(response);
            });
            deferred.promise;

        }

        function getFieldForForm(formId, fieldId){
            var deferred = $q.defer();
            $http.get('/api/assignment/form/'+formId+'/field/'+ fieldId).success(function(response){
                deferred.resolve(response);
            });
            deferred.promise;
        }

        function deleteFieldFromForm(formId, fieldId){
            var deferred = $q.defer();
            $http.delete('/api/assignment/form/' + formId +'/field/' + fieldId).success(function(response){
                deferred.resolve(response);
            })
            deferred.promise;
        }


        function updateField(formId, fieldId, field){
            var deferred = $q.defer();
            $http.put('/api/assignment/form/'+formId + '/field/'+fieldId)



        }




    }
});