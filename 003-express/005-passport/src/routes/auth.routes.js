import express from "express";
import {authController} from "../domains/user/auth.controller.js";
import {checkAuth, checkGuest} from "../middlewares/auth.middleware.js";
import {oAuthController} from "../domains/user/oauth.controller.js";

const authRouter = express.Router()

authRouter.get('/', checkAuth, (req, res, next) => {
    res.render('index')
})

authRouter.get('/login', checkGuest, (req, res) => {
    res.render('login')
})

authRouter.get('/signup', checkGuest, (req, res) => {
    res.render('signup')
})

authRouter.get('/oauth/:social', checkGuest, oAuthController.signOauth)
authRouter.get('/oauth/:social/callback', oAuthController.callback)

authRouter.post('/signup', checkGuest, authController.storeByEmail)
authRouter.post('/sign-in', checkGuest, authController.signIn)

authRouter.delete('/logout', authController.signOut)

export { authRouter }