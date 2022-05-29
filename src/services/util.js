function badResquest(res, err) {
    res.status(400).json({
        err
    })
}

export { badResquest }