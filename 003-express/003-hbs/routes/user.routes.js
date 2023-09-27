import express from 'express'
import userController from '../domain/user/user.controller.js'

const userRoutes = express.Router()

userRoutes.get('/', userController.list)
userRoutes.get('/:id', userController.getUserById)
userRoutes.post('/create', userController.createUser)

export { userRoutes }