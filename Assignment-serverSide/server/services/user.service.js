
module.exports = function(app, model){
    //var model = require('../models/user.model.js');
    //var info = require('../models/user.mock.json');
    app.post('api/assignment/user', function(req,res){
        model.Create(req.body).then(function(user){
            res.json(user);
        });
    });

    app.get('/api/assignment/user',function(req,res){
        //console.log(info);
        //console.log(model.FindAll());
        model.FindAll(function(users){
            console.log(users);
            res.json(users);
        })
    });

    app.get('/api/assignment/user/:id',function(req,res){
        model.FindById(req.params.id).then(function(user){
            res.json(user);
        })
    });

    app.get('/api/assignment/user?username=:username',function(req,res){
        model.findUserByUsername(req.params.username).then(function(user){
            res.json(user);
        })

    });

    ///api/assignment/user?username=/'+ username + '/&password=/' + password
    app.get('/api/assignment/user?username=:username/&password=:password', function(req,res){
        model.findUserByCredentials(
            {username: req.params.username, password: req.params.password}
        ).then(function(user){
                res.json(user);
            })
    });

    //Here has some questions how to
    app.put('/api/assignment/user/:id', function(req,res){
        model.Update(req.params.id, req.body).then(function(user) {
            res.json(user);
        });
    });


    app.delete('/api/assignment/user/:id', function(req,res){
        model.Delete(req.params.id).then(function(user){
            res.json(user);
        });
    });




};