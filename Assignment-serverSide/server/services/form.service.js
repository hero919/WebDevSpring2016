
module.exports = function(app){
    var model = require('../models/form.model.js');

    app.get('/api/assignment/user/:userId/form',function(req,res){
        var userId = req.params.userId;

       model.findFormByUserId(userId).then(function(form){
           res.json(form);
       });
    });


    app.get('/api/assignment/form/:formId',function(req,res){
        var formId = req.params.formId;
        model.findById(formId).then(function(form){
            res.json(form);
        });
    });

    app.delete('/api/assignment/form/:formId', function(req,res){
        var formId = req.params.formId;
        model.Delete(formId);
    });

    app.post('/api/assignment/user/:userId/form', function(res,req){
        var userId = req.params.userId;

        var newForm = req.body;
        newForm.userId = userId;
        model.Create(newForm).then(function(form){
            res.json(form);
        })
    });

    app.put('/api/assignment/form/:formId', function(req,res){
        var formId = req.params.formId;
        model.Update(formId, req.body);
    });
};