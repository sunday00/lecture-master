import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
    userToken: {
        type: String,
        required: true,
    },
    messages: [
        {
            from: {
                type: String,
                required: true,
            },
            message: {
                type: String,
                required: true,
            },
            time: {
                type: String,
                required: true,
            }
        }
    ]
})

export const messageModel = mongoose.model('Message', messagesSchema)
