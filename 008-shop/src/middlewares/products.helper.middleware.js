import {Category} from "../domains/category/category.model.js";

export async function getAllCategories(req, res, next) {
    try {
        res.locals.categories = await Category.find();
        next();
    } catch (error) {
        console.error(error);
        next(error);
    }
}