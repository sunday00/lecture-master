import { Router } from "express";
import {checkAuth, checkCommentOwnerShip, checkPostOwnerShip} from "../middlewares/auth.middleware.js";
import {postController} from "../domains/post/post.controller.js";
import {uploadfileMiddleware} from "../middlewares/uploadfile.middleware.js";
import {commentController} from "../domains/comment/comment.controller.js";

const commentRouter = new Router({ mergeParams: true })

commentRouter.post('/', checkAuth, commentController.store)

commentRouter.get('/:id/edit', checkAuth, checkCommentOwnerShip, commentController.edit)
commentRouter.put('/:id', checkAuth, checkCommentOwnerShip, commentController.update)

commentRouter.delete('/:id', checkAuth, checkCommentOwnerShip, commentController.delete)

export { commentRouter }