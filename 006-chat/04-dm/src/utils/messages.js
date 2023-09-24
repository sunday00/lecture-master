import crypto from "crypto";
import {messageModel} from "../models/messages.model.js";

export const randomId = () => crypto.randomBytes(8).toString('hex')

export const saveMessage = async ({from, to, message, time}) => {
    let token = getToken(from, to)
    let data = {
        from, message, time,
    }
    messageModel.updateOne({ userToken: token }, {
        $push: { messages: data }
    }, { upsert: true})
        .then((res) => {
            console.log(`Send message`, res)
        })
        .catch((err) => {
            throw err
        })
}

export const getToken = (from, to) => {
    return [from, to].sort().join('')
}

export const fetchMessage =  async (io, senderRealSocketID, senderUserID, receiver) => {
    let token = getToken(senderUserID, receiver)
    const foundToken = await messageModel.findOne({ userToken: token})

    if(foundToken) {
        io.to(senderRealSocketID).emit('stored-messages', {
            messages: foundToken.messages
        })
    } else {
        // let data = {
        //     userToken: token,
        //     messages: []
        // }
        //
        // const message= new messageModel(data)
        // const savedMessage = await message.save()
        // if( savedMessage ) console.log('created message')
        // else console.error('failed to save')
    }
}