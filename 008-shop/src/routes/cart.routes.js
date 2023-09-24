import {Router} from "express";
import {checkAuth} from "../middlewares/auth.middleware.js";
import {cartController} from "../domains/cart/cart.controller.js";

const cartRoutes = new Router({ mergeParams: true })

cartRoutes.get('/checkout', checkAuth, cartController.checkout)
cartRoutes.post('/:slug', checkAuth, cartController.store)
cartRoutes.get('/update/:slug', checkAuth, cartController.update)
cartRoutes.delete('/', checkAuth, cartController.delete)

cartRoutes.post('/complete/order', cartController.complete)

export { cartRoutes }