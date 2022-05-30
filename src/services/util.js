function badResquest(res, err) {
    res.status(400).json({
        err
    })
}

function InternalServerError(res, err) {
    res.status(500).json({
        err: err
    })
}

export { badResquest, InternalServerError }