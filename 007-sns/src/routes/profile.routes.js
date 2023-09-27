import { Router } from "express";
import {profileController} from "../domains/profile/profile.controller.js";
import {checkAuth} from "../middlewares/auth.middleware.js";

const profileRouter = new Router({ mergeParams: true })

profileRouter.get('/', checkAuth, profileController.index)
profileRouter.get('/edit', checkAuth, profileController.edit)
profileRouter.put('/', checkAuth, profileController.update)

export { profileRouter }