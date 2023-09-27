import { makeExecutableSchema } from "@graphql-tools/schema";
import {loadFiles, loadFilesSync} from "@graphql-tools/load-files";
import path from "path";
import { pathToFileURL } from 'url'

class SchemaBuilder {
    async build() {
        const schemaString = loadFilesSync('**/*', {
            extensions: ['graphql']
        })

        // const resolvers = loadFilesSync(path.join(path.resolve('./src/domain'), '**/*.resolver.js'))
        const resolversArray = await loadFiles(path.join(path.resolve('./src/domain'), '**/*.resolver.js'), {
                requireMethod: async (path) => {
                    const module = await import(pathToFileURL(path).toString());

                    return module["resolver"];
                },
                recursive: true,

            }
        )

        const resolvers = {
            Query: {},
            Mutation: {}
        }

        for(let resolver of resolversArray) {
            for(let [type, QM] of Object.entries(resolver)) {
                for(let [k, v] of Object.entries(QM)) {
                    resolvers[type][k] = v
                }
            }
        }

        return makeExecutableSchema({
            typeDefs: [schemaString],
            resolvers: resolvers
        })
    }
}

const schemaBuilder = new SchemaBuilder()

export const schema = await schemaBuilder.build()
