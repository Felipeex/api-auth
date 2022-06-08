/* Database */
import { users } from "../../services/db.js"

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
async function AuthVerifyAccontExists(req, res, next) {
    const { email } = req.body

    try {
        const usersByEmail = await users.find({ email: email.toLowerCase() })
        if(usersByEmail.length > 0)
        return Bad(res, "Conta Existente")

        next()
    } catch (err) {
        InternalServerError(res, err)
    }
}

export { AuthInformationsValidate, AuthVerifyAccontExists }