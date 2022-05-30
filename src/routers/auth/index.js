import express from "express"
const router = express.Router()

import { AuthInformationsValidate } from "../../controllers/signup.js"
import { AuthInformationsInsert } from "../../models/singup.js"

router.post('/signup', AuthInformationsValidate, (req, res) => {
    AuthInformationsInsert(req, res)
})

export default router