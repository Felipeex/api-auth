/* Database */
import { DB } from "../../services/db.js"

/* Tratamento de erros */
import { badResquest, InternalServerError } from "../../services/util.js"

/* Tokens */
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

/* Validar login (Email, Senha). */
function AuthValidatePassword(req, res, next) {
    const { email, password } = req.body

    DB.query(`SELECT user_id, password FROM users WHERE email = '${email}'`, async (err, result) => {
        if(err)
        return InternalServerError(res, err)

        if(result.length < 1)
        return badResquest(res, "Conta não Existente.")

        const hashPassword = await bcrypt.compare(password, result[0].password)
        if (!hashPassword)
        return badResquest(res, "Dados incorretos.")

        req.body.usertoken = GenerateJsonWebToken(result[0].password)

        next()
    })
}

function GenerateJsonWebToken(user_id) {
    return jwt.sign({ user_id }, '732y487udhuiahd8UHS8SUAHD83Q4HE78shoi', { expiresIn: '1d' })
}

export { AuthValidatePassword }