import express from "express"
const router = express.Router()

import { AuthInformationsValidate, AuthVerifyAccontExists } from "../../controllers/signup.js"
import { AuthInformationsInsert } from "../../models/singup.js"
import { sucessResquest } from "../../services/util.js"

router.post('/signup', AuthInformationsValidate, AuthVerifyAccontExists, AuthInformationsInsert,  async (req, res) => {
    sucessResquest(res, "Conta criada com sucesso")
})

export default router