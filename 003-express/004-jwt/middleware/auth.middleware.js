import jwt from "jsonwebtoken";
import {refreshTokens} from "../domain/auth/refresh-tokens.model.js";
import {authController} from "../domain/auth/auth.controller.js";

export function authMiddleware (req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        console.error(err)

        if(err) {
            res.sendStatus(403)
        }

        req.user = user

        next()
    })
}