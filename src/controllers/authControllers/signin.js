/* Database */
import { users } from "../../services/db.js"

/* Tratamento de erros */
import { Bad, InternalServerError } from "../../services/util.js"

/* Tokens */
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

/* Validar login (Email, Senha). */
async function AuthValidatePassword(req, res, next) {
    const { email, password } = req.body

    try {
        const usersByEmail = await users.find({ email: email})
        
        if(usersByEmail.length < 1)
        return Bad(res, "Conta não Existente.")

        const hashPassword = await bcrypt.compare(password, usersByEmail[0].password)
        if (!hashPassword)
        return Bad(res, "Dados incorretos.")

        req.body.usertoken = GenerateJsonWebToken(usersByEmail[0].password)

        next()
    } catch (err) {
        InternalServerError(res, err)
    }
}

function GenerateJsonWebToken(user_id) {
    return jwt.sign({ user_id }, process.env.JWT__TOKEN, { expiresIn: '1d' })
}

export { AuthValidatePassword }