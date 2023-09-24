import express from 'express'
import {configDotenv} from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { router } from './src/router.js'
import {catcher} from "./src/middlewares/catcher.js";

configDotenv({ path: './.env' })

const app = express()
app.use(express.json())
// body parser. get body data
app.use(express.urlencoded({ extended: false }))
// set static assets return
app.use('/static', express.static(path.resolve('src/public')))

// set database
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:27017/${process.env.DB_BASE}?authMechanism=DEFAULT`)
    .then(() => console.log('mdb conn'))
    .catch(err => console.error(err))

// set router
app.use('/product', router)

app.get('/intend', (req, res, next) => {
    throw new Error('oops')
})

app.get('/intend-async', (req, res, next) => {
    setTimeout(() => {
        // throw new Error('oops')
        next(new Error('oops'))
    }, 1)
})

// err catcher filter
app.use(catcher)

const port = process.env.APP_PORT

app.listen(port, () => {
    console.log(`Server runs on ${port}`)
})
