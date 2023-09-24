import { Strategy as LocalStrategy } from 'passport-local'
import GoogleStrategy from 'passport-google-oauth20'
import {Strategy as KakaoStrategy} from 'passport-kakao'
import {User} from "../domains/user/user.model.js";
import {configDotenv} from "dotenv";

configDotenv({ path: './.env' })

const localStrategyConfig = new LocalStrategy({ usernameField: 'email', passwordField: 'password' },
    (email, password, done) => {

        User.findOne({
            email: email.toLocaleLowerCase()
        })
            .then((user) => {
                if (!user) {
                    return done(null, false, { msg: `Email ${email} not found` });
                }

                user.comparePassword(password, (err, isMatch) => {
                    if (err) return done(err);

                    if (isMatch) {
                        return done(null, user);
                    }

                    return done(null, false, { msg: 'Invalid email or password.' })
                })
            })
            .catch((err) => {
                if (err) return done(err);
            })
    }
)

const googleStrategyConfig = new GoogleStrategy({
    clientID: process.env.GOOGLE_KEY,
    clientSecret: process.env.GOOGLE_SEC,
    callbackURL: '/oauth/google/callback',
    scope: ['email', 'profile']
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
        .then((existingUser) => {
            if (existingUser) {
                return done(null, existingUser);
            } else {
                const user = new User();
                user.email = profile.emails[0].value;
                user.googleId = profile.id;
                user.save()
                    .then(() => {
                        done(null, user);
                    })
                    .catch((err) => {
                        console.log(err);
                        if (err) { return done(err); }
                    })
            }
        })
        .catch(err => {
            if (err) { return done(err); }
        })
})

const kakaoStrategyConfig = new KakaoStrategy({
    clientID: process.env.KAKAO_SEC,
    callbackURL: '/oauth/kakao/callback',
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ kakaoId: profile.id })
        .then((existingUser) => {
            if (existingUser) {
                return done(null, existingUser);
            } else {
                const user = new User();

                user.email = profile._json.kakao_account.email ?? '_@no_supply.mil';
                user.kakaoId = profile.id;
                user.save()
                    .then(() => {
                        done(null, user);
                    })
                    .catch((err) => {
                        console.log(err);
                        if (err) { return done(err); }
                    })
            }
        })
        .catch(err => {
            if (err) { return done(err); }
        })
})

export const configPassport = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    })

    passport.deserializeUser((id, done) => {
        User.findById(id)
            .then(user => {
                done(null, user);
            })
    })

    passport.use('local', localStrategyConfig);
    passport.use('google', googleStrategyConfig);
    passport.use('kakao', kakaoStrategyConfig);
}

