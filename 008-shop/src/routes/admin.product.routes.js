import {Router} from "express";
import {checkAdmin} from "../middlewares/auth.middleware.js";
import {adminProductController} from "../domains/product/admin.product.controller.js";
import {
    generateThumbnailMiddleware,
    uploadfileMiddleware
} from "../middlewares/uploadfile.middleware.js";

const adminProductRoutes = new Router({ mergeParams: true })

adminProductRoutes.get('/', checkAdmin, adminProductController.index)
adminProductRoutes.get('/add-product', checkAdmin, adminProductController.create)
adminProductRoutes.post('/', checkAdmin, uploadfileMiddleware, generateThumbnailMiddleware, adminProductController.store)

adminProductRoutes.get('/:id/edit', checkAdmin, adminProductController.edit)

adminProductRoutes.delete('/:id', checkAdmin, adminProductController.delete)

adminProductRoutes.post('/product-gallery/:productId/', checkAdmin, uploadfileMiddleware, generateThumbnailMiddleware, adminProductController.addGallery)
adminProductRoutes.delete('/:productId/image/:image', checkAdmin, adminProductController.deleteGallery)

export { adminProductRoutes }