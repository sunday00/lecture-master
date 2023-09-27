import {Router} from "express";
import {checkAuth} from "../middlewares/auth.middleware.js";
import {productController} from "../domains/product/product.controller.js";
import {getAllCategories} from "../middlewares/products.helper.middleware.js";

const productRoutes = new Router({ mergeParams: true })

productRoutes.get('/', checkAuth,getAllCategories, productController.index)
productRoutes.get('/:categorySlug', checkAuth,getAllCategories, productController.category)

productRoutes.get('/:categorySlug/:slug', checkAuth,getAllCategories, productController.show)

export { productRoutes }