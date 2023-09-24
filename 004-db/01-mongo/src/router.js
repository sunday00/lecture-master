import express from "express";
import {controller} from "./controller.js";

const router = express.Router()

router.get('/', controller.getList)

router.get('/:id', controller.getOneById)

router.post('/', controller.store)

router.patch('/:id', controller.update)

router.delete('/:id', controller.delete)

export {router}