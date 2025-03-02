const express = require('express');
const UsersController = require('../controllers/UsersController');

const UsersRouter = express.Router();

const userController = new UsersController();

UsersRouter.get('/users', userController.findAll)
UsersRouter.get('/users/:id', userController.getById)
UsersRouter.post('/users', userController.create)
UsersRouter.put('/users/:id', userController.update)
UsersRouter.delete('/users/:id', userController.remove)

module.exports = UsersRouter