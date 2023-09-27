export const catcherFilter = (err, req, res, next) => {
    console.error(err)
    res.status(err.status  || 500)
    res.send(err.message || 'oops...')
}

export const catcher = (req, res, next) => {
    try{
        return next(req, res)
    } catch (err) {
        return next(err)
    }
}
