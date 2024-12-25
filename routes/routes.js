/***************************************************
 * routes/user.routes.js
 ***************************************************/
const express = require('express');
const msgRouter = express.Router();

// Aquí podrías importar un controlador con la lógica
// de cada endpoint. Ejemplo:
const msgController = require('../controllers/msgController')
/**
 * GET /api/users
 * Retorna la lista de usuarios
 */
msgRouter.get('/', msgController.getAllMessages);

/**
 * POST /api/users
 * Crea un usuario nuevo
 */
//router.post('/', userController.createUser);

/**
 * GET /api/users/:id
 * Retorna un usuario específico (por ID)
 */
//router.get('/:id', userController.getUserById);

/**
 * PUT /api/users/:id
 * Actualiza la información de un usuario
 */
//router.put('/:id', userController.updateUser);

/**
 * DELETE /api/users/:id
 * Elimina un usuario
 */
//router.delete('/:id', userController.deleteUser);

module.exports = msgRouter;