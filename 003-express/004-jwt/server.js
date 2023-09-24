import express from 'express'
import jwt from 'jsonwebtoken'
import {configDotenv} from "dotenv";
import {postController} from "./domain/post/post.controller.js";
import {authMiddleware} from "./middleware/auth.middleware.js";
import {authController} from "./domain/auth/auth.controller.js";

configDotenv({ path: './.env' })

const app = express()
app.use(express.json())

app.post('/login', authController.login.bind(authController))
app.post('/refresh', authController.refresh.bind(authController))

app.get('/posts', postController.getPosts)
app.get('/post', authMiddleware, postController.getPostByUserName)

const port = process.env.APP_PORT
app.listen(port, () => {
    console.log(`Server runs on ${port}`)
})
