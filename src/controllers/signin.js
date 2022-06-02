/* Database */
import { DB } from "../services/db.js"

/* Tratamento de erros */
import { badResquest, InternalServerError } from "../services/util.js"

/* Validar login (Email, Senha). */
function AuthValidatePassword(req, res, next) {
    const { email, password } = req.body

    DB.query(`SELECT user_id, password FROM auth WHERE email = '${email}' AND password = '${password}'`, async (err, result) => {
        if(err)
        return InternalServerError(res, err)

        if(result.length < 1)
        return badResquest(res, "Conta não Existente, ou dados errados!")
        next()
    })
}

export { AuthValidatePassword }