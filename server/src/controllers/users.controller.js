const fs = require('fs');
const path = require('path');
const UserModel = require('../models/user.models');
//const usersFile = path.resolve(__dirname, '../../data/users.json');

const usersController = {};

usersController.createNewUser = async (req, res) => {
    console.log(req.body); // Verifica los datos que llegan desde el cliente
    const userInfo = req.body;

    const newUser = new UserModel({ ...userInfo });

    try {
        await newUser.save(); // Guarda el usuario en la base de datos
        const allUsers = await UserModel.find(); // Busca todos los usuarios
        return res.status(200).json(allUsers); // Devuelve todos los usuarios
    } catch (err) {
        console.error('Error al guardar usuario:', err); // Registra el error
        return res.status(500).json({ error: 'Error saving to database: ' + err });
    }
};

module.exports = usersController;