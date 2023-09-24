import passport from 'passport'
import {User} from "./user.model.js";
import {mailManager} from "../../mail/mail.manager.js";

class AuthController {
    async storeByEmail(req, res) {
        const user = new User(req.body)

        try {
            await user.save()

            mailManager.send('sunday0000@nate.com')

            res.redirect('/auth/login')
        } catch (e) {
            console.error(e)
        }
    }

    async signIn(req, res, next) {
        passport.authenticate('local', null,(err, user, info) => {
            if(err) return next(err)

            if(!user) return res.json({msg: info})

            req.logIn(user, function(err){
                if(err) return next(err)
                res.redirect('/post')
            })
        })(req, res, next)
    }

    async signOut(req, res, next) {
        req.logOut(function (err) {
            if(err) return next(err)
            res.redirect('/auth/login')
        })
    }
}

export const authController = new AuthController()