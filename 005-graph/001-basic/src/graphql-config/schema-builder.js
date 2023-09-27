import {buildSchema} from "graphql";

class SchemaBuilder {
    constructor() {
        this.root_blueprint = `type Query {}`
        this.type_blueprint = ``
    }

    add(newQuery, newType = null) {
        this.root_blueprint = this.root_blueprint.slice(0, -1)

        this.root_blueprint += `
            ` + newQuery + '}'

        if(newType) {
            this.type_blueprint += `
            
            ` + newType
        }
    }

    build() {
        return buildSchema(this.root_blueprint + this.type_blueprint)
    }
}

const schemaBuilder = new SchemaBuilder()

schemaBuilder.add('posts: [Post]', `
    type Post {
        id: ID!
        title: String!
        description: String!
        comments: [Comment]
    }
`)

schemaBuilder.add('comments: [Comment]', `
    type Comment {
        id: ID!
        text: String!
        likes: Int
    }
`)

export const schema = schemaBuilder.build()