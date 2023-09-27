import {Router} from "express";
import {checkAuth} from "../middlewares/auth.middleware.js";

const mainRouter = new Router()

mainRouter.get('/', checkAuth, (req, res, next) => {
    // res.render('index')
    res.redirect('/post')
})

export { mainRouter }