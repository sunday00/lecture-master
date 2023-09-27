import express from 'express'
import { logger } from './middlewares/Logger.js'
import { userRoutes } from './routes/user.routes.js'
import { postRoutes } from './routes/post.routes.js'
import {assetsRoutes} from "./routes/assets.routes.js";
import path from "path";

const PORT = 8080
const HOST = '0.0.0.0'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(logger)
app.use(express.static('public'))
app.use('/static', express.static('public'))
app.set('view engine', 'hbs')
app.set('views', path.resolve('resources','views'))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'hello handlebar'
    })
})

app.use('/users', userRoutes)
app.use('/posts', postRoutes)
app.use('/image', assetsRoutes)

app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`)