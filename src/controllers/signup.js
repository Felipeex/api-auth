import { badResquest, InternalServerError } from "../services/util.js"
import { DB } from "../services/db.js"

function AuthInformationsValidate(req, res, next) {
    const { email, password } = req.body

    if(!email)
    return badResquest(res, "Email Invalido")

    if(!password)
    return badResquest(res, "Senha Invalida")

    next()
}

function AuthVerifyAccontExists(req, res, next) {
    const { email } = req.body

    DB.query(`SELECT user_id FROM auth WHERE email = '${email}'`, (err, result) => {
        if(err)
        return InternalServerError(res, err)

        if(result.length !== 0)
        return badResquest(res, "Conta Existente")
        
        next()
    })
}

export { AuthInformationsValidate, AuthVerifyAccontExists }