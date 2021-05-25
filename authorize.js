const authorize = (req, res, next) => {
    const { user } = req.query
    if (user === 'dhruv') {
        req.user = { name: 'dhruv', id: 48 }
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize

