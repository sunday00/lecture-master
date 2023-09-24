import express from 'express';
import {configDotenv} from "dotenv";
import path from "path";
import {schema} from "./graphql-config/schema-builder.js";
import {ApolloServer} from "apollo-server-express";
// import {schemaValueManager} from "./graphql-config/root-value-manager.js";

configDotenv({ path: path.resolve('.env') })

async function startApolloServer() {
    const app = express()
    app.use(express.json())

    const server = new ApolloServer({ schema })

    await server.start()

    server.applyMiddleware({ app, path: '/graphql' })

    const port = process.env.APP_PORT
    app.listen(port, () => {
        console.log(`Server running on ${port}`)
    })
}

await startApolloServer()
