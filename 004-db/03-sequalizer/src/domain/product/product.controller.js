import {db} from "../../config/sequelize.data.js";

class ProductController {
    constructor() {
        this.repository = db.product
    }
    async list(req, res) {
        res.json(await this.repository.findAll(page, size))
    }

    async one(req, res){
        res.json(await this.repository.findOne({
            where: { id: req.params.id }
        }))
    }

    async store(req, res){
        const product = await this.repository.create(req.body)
        res.json(product)
    }

    async update(req, res){
        const result = await this.repository.update(req.body, {
            where: { id: req.params.id }
        })

        res.json(result)

    }

    async delete(req, res){
        const result = await this.repository.destroy({
            where: { id: req.params.id }
        })

        res.json(result)
    }
}

export const productController = new ProductController()