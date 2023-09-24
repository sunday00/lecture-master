import express from 'express'
import morgan from "morgan";
import {configDotenv} from "dotenv";
import path from "path";
import {AppDataSource} from "./config/db/data-source";
import {userRoute} from "./routes/user.route";

configDotenv({ path: path.resolve('.env') })

const app = express()

app.use(express.json())
app.use(morgan('dev'))

AppDataSource.initialize()
    .then(async () => {
        console.log('success db init')
    })
    .catch(err => {
        console.error(err)
    })

app.get('/', (req, res) => {
    res.send('running')
})

app.use('/user', userRoute)

const port = process.env.APP_PORT
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})
