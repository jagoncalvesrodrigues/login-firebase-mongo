const express = require('express');
const usersController = require('../controllers/users.controller');
const userRoutes = express.Router();

userRoutes.post('/', usersController.createNewUser);

module.exports = userRoutes;




