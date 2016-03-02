
var formData = require('./form.mock.json');

module.exports = function(app){

    var api = {
        findFormByTitle: findFormByTitle,
        Create: Create,
        FindAll: FindAll,
        FindById: FindById,
        Update:Update,
        Delete: Delete,
        findFormByUserId: findFormByUserId,
        findFieldById: findFieldById,
        deleteFieldById: deleteFieldById,
        AddField: AddField
    };

    return api;

    function findFormByTitle(title){
        for(var i = 0; i< formData.length; i++){
            if(formData[i].title === title){
                return formData[i];
            }
        }
        return null;
    }

    function Create(form){
        formData.push(form);
        return FindAll();
    }

    function FindAll(){
        return formData;
    }

    function FindById(id){
        for(var i = 0; i<formData.length; i++){
            if(formData[i].id === id){
                return formData[i];
            }
        }
        console.log("Can't find the user");
        return null;
    }



    function Update(id,updatedForm){
        for(var i = 0; i< formData.length; i++){
            if(formData[i].id === id){
                formData[i] = updatedForm;
                return formData[i];
            }
        }
    }


    function Delete(id){
      for(var i=0; i< formData.length; i++){
          if(formData[i].id === id){
              var deletedItem = formData[i];
              formData.splice(i, 1);
              return deletedItem;
          }
      }
        console.log("The id want to delete is not found. ");
    }

    function findFormByUserId(userId){
        for(var i = 0; i< formData.length; i++){
            if(formData[i].userId === userId){
                return formData[i];
            }
        }
        console.log("Can't find the corresponding forms");
    }


    function findFieldById(formId, fieldId){
        var form = FindById(formId);
        var fields = form.fields;
        for(var i in fields){
            if(fields[i].id = fieldId){
                return fields[i];
            }
        }
        console.log('Can not find the corresponding fieldId');

    }

    function deleteFieldById(formId, fieldId){
        var form = FindById(formId);
        var fields = form.fields;
        var index;
        for(var i in fields){
            if(fields[i].id = fieldId){
               index = i;
                break;
            }
        }
        fields.splice(i, 1);
        FindById(formId).fields = fields;
    }

    function AddField(formId, newField){
        var form = FindById(formId);
        newField.id = uuid.v1();
        form.fields.push(newField);
        return form.fields;

    }



};