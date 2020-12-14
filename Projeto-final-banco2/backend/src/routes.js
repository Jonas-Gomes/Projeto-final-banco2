const express = require('express');

const UserController = require('./controllers/UserController');
const ControllerEndereco = require('./controllers/ControllerEndereco');
const routs = express.Router();

routs.get('/users',UserController.list);
routs.get('/users/:id',UserController.listById);
routs.post('/users',UserController.create);
routs.put('/users/:id',UserController.update);
routs.delete('/users/:id', UserController.delete);

routs.post('/user/', ControllerEndereco.create);
routs.get('/user/', ControllerEndereco.list);

module.exports = routs;