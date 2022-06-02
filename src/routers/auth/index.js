/* express */
import express from "express"
const router = express.Router()

/* controllers */
import { AuthValidatePassword } from "../../controllers/signin.js"
import { AuthInformationsValidate, AuthVerifyAccontExists } from "../../controllers/signup.js"
import { AuthInformationsInsert } from "../../models/singup.js"
import { sucessResquest } from "../../services/util.js"

/* routers */
router.post('/signup', AuthInformationsValidate, AuthVerifyAccontExists, AuthInformationsInsert,  async (req, res) => {
    sucessResquest(res, "Conta criada com sucesso.")
})

router.post('/signin', AuthInformationsValidate, AuthValidatePassword,  async (req, res) => {
    sucessResquest(res, "Logado com sucesso")
})

export default router