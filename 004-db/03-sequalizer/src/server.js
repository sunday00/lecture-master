import express from 'express'
import {configDotenv} from "dotenv";
import path from "path";
import {productRoute} from "./routes/product.route.js";
import {db} from "./config/sequelize.data.js";

configDotenv({ path: path.resolve('.env') })

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('running')
})

app.use('/product', productRoute)

const port = process.env.APP_PORT
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})