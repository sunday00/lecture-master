import {schemaValueManager} from "../../graphql-config/root-value-manager.js";
import {postModel} from "./post.model.js";

export const resolver = {
    Query: {
        posts: async (parent, args, ctx, info) => {
            return await Promise.resolve(postModel.list())
        },
        post: async (_, args) => {
            return await Promise.resolve(postModel.one(args.id))
        }
    },
    Mutation: {
        addNewPost: async (_, args) => {
            return await Promise.resolve(postModel.store(args))
        }
    }
}