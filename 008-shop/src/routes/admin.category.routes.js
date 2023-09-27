import {Router} from "express";
import {checkAdmin, checkAuth} from "../middlewares/auth.middleware.js";
import {categoryController} from "../domains/category/category.controller.js";

const adminCategoryRoutes = new Router({ mergeParams: true })

adminCategoryRoutes.get('/', checkAdmin, categoryController.index)
adminCategoryRoutes.get('/add-category', checkAdmin, categoryController.create)
adminCategoryRoutes.post('/add-category', checkAdmin, categoryController.store)
adminCategoryRoutes.delete('/:id', checkAdmin, categoryController.delete)

export { adminCategoryRoutes }