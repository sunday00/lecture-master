import {raw} from "express";

export const checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/auth/login');
}

export const checkGuest = (req, res, next)  => {
    if (req.isAuthenticated()) {
        return res.redirect('/products');
    }
    next();
}

export const checkAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.admin === 1) {
        return next();
    } else {
        req.flash('error', 'You are not permitted in this page')
        res.redirect('back')
    }

    // res.redirect('/auth/login');
}