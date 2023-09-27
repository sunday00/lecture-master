import { Router } from "express";
import {checkAuth} from "../middlewares/auth.middleware.js";
import {friendController} from "../domains/friend/friend.controller.js";

const friendRouter = new Router({ mergeParams: true })

friendRouter.get('/', checkAuth, friendController.index)
friendRouter.put('/:id/add-friend', checkAuth, friendController.add)
friendRouter.put('/:id/remove-friend-request', checkAuth, friendController.cancel.bind(friendController))
friendRouter.put('/:id/accept-friend-request', checkAuth, friendController.accept)
friendRouter.put('/:id/reject-friend-request', checkAuth, friendController.reject.bind(friendController))
friendRouter.put('/:id/remove-friend', checkAuth, friendController.remove)

export { friendRouter }
