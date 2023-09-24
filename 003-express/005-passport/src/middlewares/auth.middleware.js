export const checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

export const checkGuest = (req, res, next)  => {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
}