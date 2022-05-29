import express from "express"
const router = express.Router()

router.post('/signin', (req, res) => {
    const { email, password } = req.body

    if(!email || email == '' || email == undefined || !password || password == '' || password == undefined) { return res.status(401).send({ mensagem: "Preecha todos campos!" }) }
    return res.sendStatus(200)
})

export default router