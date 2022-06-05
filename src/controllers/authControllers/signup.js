/* Database */
import { DB } from "../../services/db.js"

/* Tratamento de erros */
import { badResquest, InternalServerError } from "../../services/util.js"

/* Verificar sé a requisição veio com os paramentros preenchidos. */
function AuthInformationsValidate(req, res, next) {
    const { email, password } = req.body

    if(!email)
    return badResquest(res, "Email Invalido")

    if(!password)
    return badResquest(res, "Senha Invalida")

    if(email.length >= 25)
    return badResquest(res, "Email muito extenso")
    next()
}

/* Verificar sé uma conta existe (Email). */
function AuthVerifyAccontExists(req, res, next) {
    const { email } = req.body

    DB.query(`SELECT user_id FROM users WHERE email = '${email}'`, (err, result) => {
        if(err)
        return InternalServerError(res, err)

        if(result.length > 0)
        return badResquest(res, "Conta Existente")
        next()
    })
}

export { AuthInformationsValidate, AuthVerifyAccontExists }