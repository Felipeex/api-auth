/* Database */
import { DB } from "../services/db.js"

/* Tratamento de erros */
import { badResquest, InternalServerError } from "../services/util.js"

/* Tokens */
import bcrypt from "bcrypt"

/* Validar login (Email, Senha). */
function AuthValidatePassword(req, res, next) {
    const { email, password } = req.body

    DB.query(`SELECT user_id, password FROM auth WHERE email = '${email}'`, async (err, result) => {
        if(err)
        return InternalServerError(res, err)

        if(result.length < 1)
        return badResquest(res, "Conta não Existente, ou dados errados!")
        /* bcript failed */
        const match = await bcrypt.compare(password, result[0].password)
        console.log(match)
        if(!match)
        return badResquest(res, "Falha ao logar, Verifique seus dados.")
        next()
    })
}

export { AuthValidatePassword }