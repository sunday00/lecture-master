import {Product} from "./product.model.js";
import {Category} from "../category/category.model.js";
import path from "path";
import {readdirSync} from "fs";

class ProductController {
    async index(req, res, next) {
        const products = await Product.find();

        res.render('product', {
            products,
        })
    }

    async category(req, res, next) {
        const products = await Product.find({
            category: req.params.categorySlug
        });

        res.render('product', {
            products,
        })
    }

    async show(req, res, next) {
        const product = await Product.findOne({
            category: req.params.categorySlug,
            slug: req.params.slug
        });

        const galleryDir = path.resolve('src/public/assets/images/' + product.id)
        const galleryImages = readdirSync(galleryDir).filter(f => f !== 'thumbnail');

        res.render('product/item', {
            product,
            galleryImages: galleryImages,
        })
    }
}

export const productController = new ProductController()