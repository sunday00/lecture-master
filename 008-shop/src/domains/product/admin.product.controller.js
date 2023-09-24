import {Category} from "../category/category.model.js";
import {Product} from "./product.model.js";
import { renameSync, readdirSync, rmSync } from 'fs'
import path from "path";

class AdminProductController {
    async index (req, res, next) {
        try {
            const products = await Product.find();
            res.render('admin/products', {
                products
            })
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async create (req, res, next) {
        try {
            const categories = await Category.find();
            res.render('admin/add-product', {
                categories
            })
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async store(req, res, next) {
        const imageFile = req.files[0].filename;
        const { title, desc, price, category } = req.body;
        const slug = title.replace(/\s+/g, '-').toLowerCase();

        try{
            const newProduct = new Product({
                title, desc, price, slug, category, image: imageFile
            })

            await newProduct.save();

            renameSync(
                req.files[0].destination,
                path.join(req.files[0].destination, '../', newProduct.id)
            )

            req.flash('success', '상품이 추가되었습니다.');
            res.redirect('/admin/products');

        }catch (err) {
            console.error(err);
            next(err);
        }
    }

    async edit(req, res, next) {
        try {
            const categories = await Category.find();

            const { _id, title, desc, category, price, image }
                = await Product.findById(req.params.id);

            const galleryDir = path.resolve('src/public/assets/images/' + _id)

            const galleryImages = readdirSync(galleryDir).filter(f => f !== 'thumbnail');

            res.render('admin/edit-product', {
                title, desc, categories,
                category: category.replace(/\s+/g, '-').toLowerCase(),
                price, image,
                galleryImages: galleryImages,
                id: _id
            })
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async delete(req, res, next) {
        const id = req.params.id;
        const path = 'src/public/product-images/' + id;
        try {
            await Product.findByIdAndRemove(id);
            req.flash('success', '상품이 삭제되었습니다.');
            res.redirect('back');
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async addGallery(req, res, next) {
        // const productImage = req.files.file;
        // const id = req.params.id;
        // const path = 'src/public/product-images/' + id + '/gallery/' + req.files.file.name;
        // const thumbsPath = 'src/public/product-images/' + id + '/gallery/thumbs/' + req.files.file.name;

        try {
            res.sendStatus(200);
        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async deleteGallery(req, res, next) {
        try {
            const galleryDir = path.resolve('src/public/assets/images/' + req.params.productId)
            rmSync(path.join(galleryDir, req.params.image))

            const galleryImages = readdirSync(galleryDir).filter(f => f !== 'thumbnail');

            const product = await Product.findById(req.params.productId);

            if(!galleryImages.includes(product.image) && galleryImages.length > 0) {
                product.image = galleryImages[0]
                await product.save()
            }

            req.flash('success', 'deleted image')
            res.redirect('back');
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
}

export const adminProductController = new  AdminProductController()

