import express from 'express'
import { logger } from './middlewares/Logger.js'
import { userRoutes } from './routes/user.routes.js'
import { postRoutes } from './routes/post.routes.js'
import {assetsRoutes} from "./routes/assets.routes.js";

const PORT = 8080
const HOST = '0.0.0.0'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(logger)
app.use(express.static('public'))

app.use('/static', express.static('public'))

app.use('/users', userRoutes)
app.use('/posts', postRoutes)
app.use('/image', assetsRoutes)

app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`)