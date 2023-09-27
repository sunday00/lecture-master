import express from 'express'
import postController from '../domain/post/post.controller.js'

const postRoutes = express.Router()

postRoutes.get('/', postController.list)
postRoutes.get('/:id', postController.getPostById)
postRoutes.post('/create', postController.createPost)

export { postRoutes }