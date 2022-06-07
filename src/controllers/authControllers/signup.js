/* Database */
import { DB } from "../../services/db.js"

/* Tratamento de erros */
import { Bad, InternalServerError } from "../../services/util.js"

/* Verificar sé a requisição veio com os paramentros preenchidos. */
function AuthInformationsValidate(req, res, next) {
    const { email, password } = req.body

    if(!email)
    return Bad(res, "Email Invalido.")

    if(!password)
    return Bad(res, "Senha Invalida.")

    if(email.length >= 25)
    return Bad(res, "Email muito Extenso.")
    next()
}

/* Verificar sé uma conta existe (Email). */
function AuthVerifyAccontExists(req, res, next) {
    const { email } = req.body

    DB.query(`SELECT user_id FROM users WHERE email = '${email}'`, (err, result) => {
        if(err)
        return InternalServerError(res, err)

        if(result.length > 0)
        return Bad(res, "Conta Existente")
        next()
    })
}

export { AuthInformationsValidate, AuthVerifyAccontExists }