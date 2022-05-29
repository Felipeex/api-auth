import { badResquest } from "../services/util.js"

function AuthInformationsValidate(req, res, next) {
    const { email, password } = req.body

    if(!email)
    return badResquest(res, "Email Envalido")

    if(!password)
    return badResquest(res, "Senha Invalida")

    next()
}

export { AuthInformationsValidate }