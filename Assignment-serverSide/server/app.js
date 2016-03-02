module.exports = function(app){
    //console.log(app);
    var UserModel = require('./models/user.model.js')(app);
    require('./services/user.service.js')(app,UserModel);
    require('./services/form.service.js')(app);
    require('./services/field.service.js')(app);
};