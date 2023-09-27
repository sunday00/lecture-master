import { Router } from "express";
import {postController} from "../domains/post/post.controller.js";
import {checkAuth, checkPostOwnerShip} from "../middlewares/auth.middleware.js";
import {uploadfileMiddleware} from "../middlewares/uploadfile.middleware.js";

const postRouter = new Router()

postRouter.get('/', checkAuth, postController.index)
postRouter.post('/', checkAuth, uploadfileMiddleware, postController.store)

postRouter.get('/:id/edit', checkAuth, checkPostOwnerShip, postController.edit)
postRouter.put('/:id', checkAuth, checkPostOwnerShip, uploadfileMiddleware, postController.update)

postRouter.delete('/:id', checkAuth, checkPostOwnerShip, postController.delete)

export { postRouter }