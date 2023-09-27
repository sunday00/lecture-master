import {commentModel} from "./comment.model.js";

export const resolver = {
    Query: {
        comments: async (parent, args, ctx, info) => {
            // return await Promise.resolve(parent.comments)
            return await commentModel.list()
        },
        comment: async (_, args) => {
            // return await Promise.resolve(parent.comments)
            return await commentModel.one(args.id)
        },
        commentsByLikes: (_, args) => {
            return commentModel.list({ likes: {
                gt: args.minLikes,
                lt: args.maxLikes
            }})
        },
    },
    Mutation: {
        addNewComment: (_, args) => {
            return commentModel.store(args)
        }
    }
}