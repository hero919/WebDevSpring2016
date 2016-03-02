/**
 * Created by zeqingzhang on 2/17/16.
 */

module.exports = function(app){
    var uuid = require('node-uuid');
    var model = require('../models/form.model.js');

    app.get('/api/assignment/form/:formId/field', function(req,res){
        model.findById(req.params.formId).then(function(form){
            res.json(form.fields);
        });

    });

    app.get('/api/assignment/form/:formId/field/:fieldId',function(req,res){
        model.findFieldById(req.params.formId, req.params.fieldId).then(function(field){
            res.json(field);
        })


    });

    //Return Nothing
    app.delete('/api/assignment/form/:formId/field/:fieldId',function(req,res){
        model.deleteFieldById(req.params.formId, req.params.fieldId);

    });

    app.post('/api/assignment/form/:formId/field',function(req,res){



    });


    app.put('/api/assignment/form/:formId/field/:fieldId',function(req,res){




    });



};