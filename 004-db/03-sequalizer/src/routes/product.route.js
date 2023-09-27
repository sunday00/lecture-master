import express from "express";
import {productController} from "../domain/product/product.controller.js";

const productRoute = express.Router()

productRoute.get('/', productController.list.bind(productController))
productRoute.get('/:id', productController.one.bind(productController))
productRoute.post('/', productController.store.bind(productController))
productRoute.put('/:id', productController.update.bind(productController))
productRoute.delete('/:id', productController.delete.bind(productController))

export {productRoute}