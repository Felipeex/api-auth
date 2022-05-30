function sucessResquest(res, msg) {
    res.status(200).json({
        msg
    })
}

function badResquest(res, err) {
    res.status(400).json({
        err
    })
}

function InternalServerError(res, err) {
    res.status(500).send({
        err
    })
}

export { badResquest, InternalServerError, sucessResquest }