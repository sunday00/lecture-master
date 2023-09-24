import passport from "passport";

class OauthController {
    signOauth(req, res, next) {
        passport.authenticate(req.params.social)(req, res, next)
    }

    callback(req, res, next) {
        passport.authenticate(req.params.social, {
            successReturnToOrRedirect: '/',
            failureRedirect: '/login'
        })(req, res, next)
    }
}

export const oAuthController = new OauthController()