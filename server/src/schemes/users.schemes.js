const mongoose = require('mongoose');

const UserScheme = mongoose.Schema({
    //recibe como parametro los datos
    //no hace falta poner el id
    email: String,
    pass: String
},
{
    collection:'users-collection'
});

module.exports = UserScheme;