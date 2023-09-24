import express from 'express'
import assetsController from '../domain/assets/assets.controller.js'

const assetsRoutes = express.Router()

assetsRoutes.get('/', assetsController.getFile)

export { assetsRoutes }