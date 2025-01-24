const { default: mongoose } = require("mongoose");
const UserScheme = require("../schemes/users.schemes");

const UserModel = mongoose.model('User',UserScheme);

module.exports = UserModel;