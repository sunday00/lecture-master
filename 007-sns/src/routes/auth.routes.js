import express from "express";
import {authController} from "../domains/user/auth.controller.js";
import {checkAuth, checkGuest} from "../middlewares/auth.middleware.js";
import {oAuthController} from "../domains/user/oauth.controller.js";

const authRouter = express.Router()

authRouter.get('/login', checkGuest, (req, res) => {
    res.render('auth/login')
})

authRouter.get('/signup', checkGuest, (req, res) => {
    res.render('auth/signup')
})

authRouter.post('/signup', checkGuest, authController.storeByEmail)
authRouter.post('/login', checkGuest, authController.signIn)

authRouter.delete('/logout', authController.signOut)

export { authRouter }