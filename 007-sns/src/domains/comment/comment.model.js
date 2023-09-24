import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        username: String
    }
}, { timestamps: true })

export const Comment = mongoose.model('Comment', commentSchema)