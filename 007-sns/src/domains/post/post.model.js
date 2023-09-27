import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }],
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        username: String
    },
    image: {
        type: String
    },
    likes: [{ type: String }]
}, {timestamps: true})

export const Post = mongoose.model('Post', postSchema)