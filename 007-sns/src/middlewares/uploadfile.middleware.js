import multer from "multer";
import path from "path";
import {DIR} from "../utils/storage.js";

const storageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(DIR, '../public/assets/images'))
    },
    filename: (req, file, cb) => {
        // TODO: make hash for preventing duplicated file
        // Currently just store as original name
        cb(null, file.originalname)
    }
})
export const uploadfileMiddleware = multer({
    storage: storageEngine
}).single('image') // form > input:type=file:name:'image'