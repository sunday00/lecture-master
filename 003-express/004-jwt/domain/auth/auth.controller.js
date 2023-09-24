import jwt from "jsonwebtoken";
import {refreshTokens} from "./refresh-tokens.model.js";

class AuthController {
    constructor() {
    }

    login(req, res) {
        res.json(this.getTokens(req))
    }

    getTokens(req) {
        const name = req.body.username
        const user = { name }

        const accessToken = jwt.sign(user, process.env.JWT_SECRET, {expiresIn:'30s'})
        const refreshToken = jwt.sign(user, process.env.JWT_REFRESH, {expiresIn:'1d'})

        refreshTokens.push(refreshToken)

        return { accessToken, refreshToken }
    }

    refresh(req, res) {
        const refresh = req.body.refresh

        if(!refreshTokens.includes(refresh)) return res.sendStatus(403)

        jwt.verify(refresh, process.env.JWT_REFRESH, (err, user) => {
            if(err) return res.sendStatus(403)

            req.user = user

            return res.json(this.getTokens(req))
        })
    }
}

export const authController = new AuthController()