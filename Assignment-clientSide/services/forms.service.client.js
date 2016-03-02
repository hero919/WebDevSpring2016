/**
 * Created by zeqingzhang on 1/23/16.
 */

(function(){
    "use strict";
    angular.
        module('FormBuilderApp')
        .factory('FormService',FormService);

    function FormService(){
        var forms = [];
        forms = [
            {"_id": "000", "title": "Contacts", "userId": 123},
            {"_id": "010", "title": "ToDo",     "userId": 123},
            {"_id": "020", "title": "CDs",      "userId": 234}
        ];

        var vm = this;

        var service = {
            createFormForUser:createFormForUser,
            findAllFormsForUser:findAllFormsForUser,
            deleteFormById:deleteFormById,
            updateFormById: updateFormById
        };

        return service;

        function createFormForUser(userId, form, callback){
            //var date = new Date();
            //form._id = date.getTime();
            //form.userId = userId;
            //forms.push(form);
            //callback(form);
            var newForm = {};
            form._id = new Date().getTime();
            for (var key in form) {
                newForm[key] = form[key]
            }

            var determine = false;
            for(var i in forms){
                if(forms[i].title == newForm.title ){
                    determine = true;
                    console.log("The form has already exist. Please use another one.");
                    callback("Error");
                }
            }
            if(!determine) {
                newForm.userId = userId;
                forms.push(newForm);
                callback(newForm);
            }

        }


        function findAllFormsForUser(userId, callback) {
            var foundForms = [];
            for (var form in forms) {
                if (forms.hasOwnProperty(form)) {
                    if (forms[form].userId === userId) {
                        foundForms.push(forms[form]);
                    }
                }
            }
            callback(foundForms);
        }

        function deleteFormById(formId, callback){
            for(var form in forms){
                if (forms.hasOwnProperty(form)) {
                    console.log(forms[form]._id);
                    console.log(formId);
                    console.log(forms[form]._id === formId);

                    if (forms[form]._id === formId) {
                        //var index = forms.indexOf(form);
                        console.log("the id of the form is: " + form);
                        forms.splice(form, 1);
                    }
                }
            }
            callback(forms);
        }

        function updateFormById(formId, newForm, callback) {
            var Form = {};
            console.log(newForm);
            console.log(formId);

            //for (var key in newForm) {
            //    Form[key] = newForm[key];
            //}
            for (var form in forms) {
                if (forms.hasOwnProperty(form)) {
                    if (forms[form]._id === formId) {

                        forms[form] = newForm;
                        console.log(forms);
                        callback(forms[form]);
                        break;
                    }
                }
            }

        }
    }
})();




//"use strict";
//
//appRoute.factory('FormService', function FormService(){
//    var forms = [];
//
//    var createFormForUser = function(userId, form, callback){
//
//    };
//
//    var findAllFormsForUser= function(userId, callback){
//
//    };
//
//    var deleteFormById = function(formId, callback){
//
//    };
//    var updateFormById= function(formId, newForm, callback){
//
//    };
//
//
//
//})
