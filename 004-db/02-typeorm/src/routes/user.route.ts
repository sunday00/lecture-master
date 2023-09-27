import express from "express";
import {userController} from "../domain/user/user.controller";

const userRoute = express.Router()

userRoute.get('/', userController.list.bind(userController))
userRoute.get('/:id', userController.one.bind(userController))
userRoute.post('/', userController.store.bind(userController))
userRoute.put('/:id', userController.update.bind(userController))
userRoute.delete('/:id', userController.delete.bind(userController))

export {userRoute}