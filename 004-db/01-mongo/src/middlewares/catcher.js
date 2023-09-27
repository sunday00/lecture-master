export const catcher = (err, req, res, next, options  = {}) => {
    console.log('err')
    return res.status(400).json({ err: err.message })
}