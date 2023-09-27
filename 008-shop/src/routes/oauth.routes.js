import express from "express";
import {checkGuest} from "../middlewares/auth.middleware.js";
import {oAuthController} from "../domains/user/oauth.controller.js";

const oauthRouter = express.Router()

oauthRouter.get('/:social', checkGuest, oAuthController.signOauth)
oauthRouter.get('/:social/callback', oAuthController.callback)

export { oauthRouter }