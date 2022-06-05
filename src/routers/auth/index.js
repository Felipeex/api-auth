/* express */
import express from "express"
const router = express.Router()

/* controllers */
import { AuthValidatePassword } from "../../controllers/authControllers/signin.js"
import { AuthInformationsValidate, AuthVerifyAccontExists } from "../../controllers/authControllers/signup.js"
import { AuthInformationsInsert } from "../../models/authModels/singup.js"
import { sucessResquest } from "../../services/util.js"

/* routers */
router.post('/signup', AuthInformationsValidate, AuthVerifyAccontExists, AuthInformationsInsert,  async (req, res) => {
    sucessResquest(res, "Conta criada com sucesso.")
})

router.post('/signin', AuthInformationsValidate, AuthValidatePassword,  async (req, res) => {
    const { usertoken } = req.body
    sucessResquest(res, { status: "Logado com sucesso!", token: usertoken, })
})

export default router