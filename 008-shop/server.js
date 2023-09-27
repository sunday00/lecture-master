import express from 'express'
import {configDotenv} from "dotenv";
import mongoose from "mongoose";
// import cookieSession from 'cookie-session'
import cookieSession from 'express-session'
import path from "path";
import passport from "passport";
import flash from 'connect-flash'

import {configPassport} from "./src/configs/passport.js";
import {methodOverride} from "./src/middlewares/form.method-override.js";

import {mainRouter} from "./src/routes/main.routes.js";
import {authRouter} from "./src/routes/auth.routes.js";
import {oauthRouter} from "./src/routes/oauth.routes.js";
import {catcherFilter} from "./src/middlewares/catcher.filter.js";
import {productRoutes} from "./src/routes/product.routes.js";
import {cartRoutes} from "./src/routes/cart.routes.js";
import {adminProductRoutes} from "./src/routes/admin.product.routes.js";
import {adminCategoryRoutes} from "./src/routes/admin.category.routes.js";

configDotenv({ path: './.env' })

const app = express()
app.use(express.json())
// body parser. get body data
app.use(express.urlencoded({ extended: false }))
// set static assets return
app.use('/static', express.static(path.resolve('src/public')))

// set cookie, passport
// app.use(cookieSession({
//     name: 'cookie-session-name',
//     keys: [process.env.COOKIE_ENCRYPTION_KEY]
// }))
app.use(cookieSession({
    name: 'shop-app-cookie',
    secret: process.env.COOKIE_ENCRYPTION_KEY,
    saveUninitialized: false,
    resave: false,
    cookie: {
        httponly: true,
        secure: false,
    },
    // store: 'redis'
}))

// use delete, put, patch method from browser
app.use(methodOverride)

// set passport strategy
app.use(passport.initialize({}));
app.use(passport.session({}));
configPassport(passport)

// app.use(function (request, response, next) {
//     if (request.session && !request.session.regenerate) {
//         request.session.regenerate = (cb) => {
//             cb()
//         }
//     }
//     if (request.session && !request.session.save) {
//         request.session.save = (cb) => {
//             cb()
//         }
//     }
//     next()
// })

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
    res.locals.cart = req.session.cart;
    next()
})

// set router
app.use('/', mainRouter)
app.use('/auth', authRouter)
app.use('/oauth', oauthRouter)

app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/admin/products', adminProductRoutes);
app.use('/admin/categories', adminCategoryRoutes);


// catcher()
app.use(catcherFilter)

const port = process.env.APP_PORT

app.listen(port, () => {
    console.log(`Server runs on ${port}`)
})
