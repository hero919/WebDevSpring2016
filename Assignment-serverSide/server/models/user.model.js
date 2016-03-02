/**
 * Created by zeqingzhang on 2/13/16.
 */
var userData = require('./user.mock.json');
module.exports = function(app){

    var api = {
        Create:Create,
        FindAll : FindAll,
        FindById: FindById,
        Update: Update,
        Delete: Delete,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials
    };



    function Create(newUser){
        userData.push(newUser);
        return FindAll();

    }

    function FindAll(callback){
        callback(userData);

    }

    function FindById(id){
        for(var i = 0; i<userData.length; i++){
            if(userData[i].id === id){
                return userData[i];
            }
        }
        console.log("Can't find the user");
        return null;

    }

    function Update(id, updatedUser){
       for(var i = 0; i< userData.length; i++){
           if(userData[i].id === id){
               userData[i] = updatedUser;
           }
       }
    }

    function Delete(id){
        for(var i=0; i< userData.length; i++){
            if(userData[i].id=== id){
                userData.splice(i, 1);
            }
        }

    }

    function findUserByUsername(username){
        for(var i =0; i< userData.length;i++){
            if(userData[i].username === username){
                return userData[i];
            }
        }
        return null;
    }


    function findUserByCredentials(credential){
        console.log("Test Login");
        for(var i=0;i< userData.length;i++){
            if(userData[i].username === credential.username
            &&userData[i].password === credential.password){
                console.log('The credential is '+ userData[i]);
                return userData[i];
            }
        }
        return null;
    }

    return api;



};