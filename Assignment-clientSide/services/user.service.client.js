/**
 * Created by zeqingzhang on 1/23/16.
 */

(function(){
    "use strict";
    angular.
        module('FormBuilderApp')
        .factory('UserService', UserService);



    function UserService(){
        var currentUsers = [];
        currentUsers = [
            {"_id":123, "firstName":"Alice",  "lastName":"Wonderland","username":"alice",  "password":"alice"},
            {"_id":234, "firstName":"Bob",    "lastName":"Hope",      "username":"bob",    "password":"bob"},
            {"_id":345, "firstName":"Charlie","lastName":"Brown",     "username":"charlie","password":"charlie"},
            {"_id":456, "firstName":"Dan",    "lastName":"Craig",     "username":"dan",    "password":"dan"},
            {"_id":567, "firstName":"Edward", "lastName":"Norton",    "username":"ed",     "password":"ed"}
        ];



        var serveice ={
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            findAllUsers:findAllUsers,
            createUser:createUser,
            deleteUserById:deleteUserById,
            updateUser:updateUser
        };

        return serveice;
        function findUserByUsernameAndPassword(username, password, callback){
            for(var user in currentUsers) {
                if (currentUsers.hasOwnProperty(user)) {
                    console.log((currentUsers[user].username == username) +" - "+ (currentUsers[user].password == password));
                    if ((currentUsers[user].username == username) && (currentUsers[user].password == password)) {
                        callback(currentUsers[user]);
                        break;
                    } else {
                        callback(null);

                    }
                }
            }
        }

        function findAllUsers(callback){
            callback(currentUsers);
        }

        function createUser(user, callback){
            var date = new Date();
            user._id = date.getTime();
            currentUsers.push(user);
            callback(user);

        }

        function deleteUserById(userId, callback){
            for(var user in currentUsers){
                if (currentUsers.hasOwnProperty(user)) {
                    if (currentUsers[user]._id == userId) {
                        currentUsers.splice(form, 1);
                    }
                }
        }

        callback(currentUsers);
        }

        function updateUser(userId, user, callback){
            for(var usersample in currentUsers){
                if (currentUsers.hasOwnProperty(usersample)) {
                    console.log(currentUsers[usersample]);
                    console.log(user);
                    if (currentUsers[usersample]._id == userId) {
                        currentUsers[usersample] = user;
                        console.log(currentUsers[usersample]);
                        callback(currentUsers[usersample]);
                        break;
                    }
                }
        }

        }





    }




})();


//"use strict";
//appRoute.factory("UserService", function UserService(){
//    var currentUsers = [{username:"terry", password:"123456"},
//        {username:"claire", password:"123456"}];
//
//    var findUserByUsernameAndPassword = function(username, password, callback){
//        for(var user in currentUsers){
//            if((user.username == username)&&(user.password == password)){
//               return callback(user);
//            }else{
//                return callback(null);
//            }
//        }
//
//    }
//
//    var findAllUsers = function(callback){
//
//        return callback(currentUsers);
//
//    }
//
//    var createUser = function(user, callback){
//        var guid = Guid.create();
//
//        if(Guid.isGuid(guid)){
//            user.id = guid;
//        }
//        return callback(user);
//
//
//    }
//
//    var deleteUserById = function(userId, callback){
//        for(var user in currentUsers){
//            if(user.id == userId){
//                currentUsers.remove(user);
//            }
//        }
//
//        return callback(currentUsers);
//
//    }
//
//    var updateUser = function(userId, userObject, callback){
//        for(var user in currentUsers){
//            if(user.id == userId){
//                user = userObject;
//                return callback(user);
//                break;
//            }
//        }
//    }
//
//
//
//})
