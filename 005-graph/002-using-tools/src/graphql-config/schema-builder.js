import { makeExecutableSchema } from "@graphql-tools/schema";
import {loadFilesSync} from "@graphql-tools/load-files";

class SchemaBuilder {
    build() {
        const schemaString = loadFilesSync('**/*', {
            extensions: ['graphql']
        })

        return makeExecutableSchema({
            typeDefs: [schemaString]
        })
    }
}

const schemaBuilder = new SchemaBuilder()



export const schema = schemaBuilder.build()