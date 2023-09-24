import express from 'express';
import {configDotenv} from "dotenv";
import path from "path";
import {graphqlHTTP} from "express-graphql";
import {schema} from "./graphql-config/schema-builder.js";
import {schemaValueManager} from "./graphql-config/root-value-manager.js";

configDotenv({ path: path.resolve('.env') })

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('running')
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: schemaValueManager.rootValue,
    graphiql: true,
}))

const port = process.env.APP_PORT
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})