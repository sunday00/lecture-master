import { Router } from "express";
import {checkAuth} from "../middlewares/auth.middleware.js";
import {likeController} from "../domains/like/like.controller.js";

const likeRouter = new Router({ mergeParams: true })

likeRouter.put('/', checkAuth, likeController.update)

export { likeRouter }