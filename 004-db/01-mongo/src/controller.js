import {model} from "./repository/model.js";

class Controller {
    getList(req, res) {
        model.find({})
            .then((products) => {
                res.status(200).json(products)
            })
            .catch(err => {
                console.error(err)
            })
    }

    async getOneById(req, res) {
        model.findById(req.params.id)
            .then((product) => {
                res.status(200).json(product)
            })
            .catch(err => {
                console.error(err)
            })
    }

    async store(req, res) {
        model.create(req.body)
            .then((product) => {
                res.status(201).json(product)
            })
            .catch(err => {
                res.sendStatus(404)
                console.error(err)
            })
    }

    async update(req, res){
        model.findByIdAndUpdate( req.params.id, req.body, { new: true } )
            .then((product) => {
                res.status(202).json(product)
            })
            .catch(err => {
                res.sendStatus(404)
                console.error(err)
            })
    }

    async delete(req, res) {
        model.findByIdAndDelete( req.params.id )
            .then(() => {
                res.sendStatus(204)
            })
            .catch(err => {
                res.sendStatus(404)
                console.error(err)
            })
    }
}

export const controller = new Controller()