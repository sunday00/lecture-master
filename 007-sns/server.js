import express from 'express'
import {configDotenv} from "dotenv";
import mongoose from "mongoose";
import cookieSession from 'cookie-session'
import path from "path";
import passport from "passport";
import flash from 'connect-flash'

import {configPassport} from "./src/configs/passport.js";
import {methodOverride} from "./src/middlewares/form.method-override.js";

import {mainRouter} from "./src/routes/main.routes.js";
import {authRouter} from "./src/routes/auth.routes.js";
import {oauthRouter} from "./src/routes/oauth.routes.js";
import {commentRouter} from "./src/routes/comment.routes.js";
import {likeRouter} from "./src/routes/like.routes.js";
import {friendRouter} from "./src/routes/friend.routes.js";
import {postRouter} from "./src/routes/post.routes.js";
import {profileRouter} from "./src/routes/profile.routes.js";
import {catcherFilter} from "./src/middlewares/catcher.filter.js";

configDotenv({ path: './.env' })

const app = express()
app.use(express.json())
// body parser. get body data
app.use(express.urlencoded({ extended: false }))
// set static assets return
app.use('/static', express.static(path.resolve('src/public')))

// set cookie, passport
app.use(cookieSession({
    name: 'cookie-session-name',
    keys: [process.env.COOKIE_ENCRYPTION_KEY]
}))

// use delete, put, patch method from browser
app.use(methodOverride)

// set passport strategy
app.use(passport.initialize({}));
app.use(passport.session({}));
configPassport(passport)

app.use(function (request, response, next) {
    if (request.session && !request.session.regenerate) {
        request.session.regenerate = (cb) => {
            cb()
        }
    }
    if (request.session && !request.session.save) {
        request.session.save = (cb) => {
            cb()
        }
    }
    next()
})

// set views
app.set('views', path.resolve('src/resources/views'))
app.set('view engine', 'ejs')

// set database
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:27017/${process.env.DB_BASE}?authMechanism=DEFAULT`)
    .then(() => console.log('mdb conn'))
    .catch(err => console.error(err))

// flash message
app.use(flash())
app.use((req, res, next) => {
    res.locals.error = req.flash('error')
    res.locals.success = req.flash('success')
    res.locals.currentUser = req.user
    next()
})

// set router
app.use('/', mainRouter)
app.use('/auth', authRouter)
app.use('/oauth', oauthRouter)
app.use('/friend', friendRouter)
app.use('/post', postRouter)
app.use('/post/:postId/comment', commentRouter)
app.use('/post/:postId/like', likeRouter)
app.use('/profile', profileRouter)

// catcher
app.use(catcherFilter)

const port = process.env.APP_PORT

app.listen(port, () => {
    console.log(`Server runs on ${port}`)
})
