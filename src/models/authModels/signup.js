/* Database */
import { users } from "../../services/db.js"

/* Tratamento de erros */
import { InternalServerError } from "../../services/util.js"

/* Tokens */
import bcrypt from "bcryptjs"

/* Insertar Valores ao fazer o cadastro. */
async function AuthInformationsInsert(req, res, next) {
    const { email, password } = req.body
    const hashPassword = await bcrypt.hash(password, 10)

    try {
        await users.create({
            email: email.toLowerCase(),
            password: hashPassword
        })

        next()
    } catch (err) {
        InternalServerError(res, err)
    }
}

export { AuthInformationsInsert }