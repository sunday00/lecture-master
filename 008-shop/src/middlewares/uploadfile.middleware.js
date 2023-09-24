import multer from "multer";
import path from "path";
import {DIR} from "../utils/storage.js";
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import resizeImg from 'resize-img'

const storageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        let destinationDir = path.join(DIR, '../public/assets/images', req.user.id)

        if(req.params.productId) {
            destinationDir = destinationDir.replace(req.user.id, req.params.productId)
        }

        if(!existsSync(destinationDir)){
            mkdirSync(destinationDir + '/thumbnail', {recursive: true})
        }

        cb(null, destinationDir)
    },
    filename: (req, file, cb) => {
        // TODO: make hash for preventing duplicated file
        // Currently just store as original name
        cb(null, file.originalname)
    }
})
export const uploadfileMiddleware = multer({
    storage: storageEngine
}).array('image')  // form > input:type=file:name:'image'

export const generateThumbnailMiddleware = async (req, res, next) => {
    for(let file of req.files) {
        const buf = await resizeImg(readFileSync(file.path), {width: 100, height: 100})
        writeFileSync(file.destination + '/thumbnail/' + file.originalname, buf)
    }

    next()
}