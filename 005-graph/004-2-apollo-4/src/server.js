import express from 'express';
import {configDotenv} from "dotenv";
import path from "path";
import {schema} from "./graphql-config/schema-builder.js";
import {ApolloServer} from "@apollo/server";
import cors from 'cors'
import json from "body-parser";
import {expressMiddleware} from "@apollo/server/express4";
// import {schemaValueManager} from "./graphql-config/root-value-manager.js";

configDotenv({ path: path.resolve('.env') })

async function startApolloServer() {
    const app = express()
    app.use(express.json())

    const server = new ApolloServer({ schema })

    await server.start()

    // server.applyMiddleware({ app, path: '/graphql' })
    app.use('/graphql', cors(), json(), expressMiddleware(server, {
        context: async ({req}) => ({token: req.headers.token})
    }))

    const port = process.env.APP_PORT
    app.listen(port, () => {
        console.log(`Server running on ${port}`)
    })
}

await startApolloServer()
