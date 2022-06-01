function sucessResquest(res, message) {
    res.status(200).json({
        message
    })
}

function badResquest(res, error) {
    res.status(400).json({
        error
    })
}

function InternalServerError(res, error) {
    res.status(500).send({
        error
    })
}

export { badResquest, InternalServerError, sucessResquest }