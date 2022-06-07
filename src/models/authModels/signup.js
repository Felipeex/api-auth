/* Database */
import { DB } from "../../services/db.js"

/* Tratamento de erros */
import { InternalServerError } from "../../services/util.js"

/* Tokens */
import bcrypt from "bcryptjs"

/* Insertar Valores ao fazer o cadastro. */
async function AuthInformationsInsert(req, res, next) {
    const { email, password } = req.body
    const hashPassword = await bcrypt.hash(password, 10)

    try {
        DB.query(`INSERT INTO users (email, password) VALUES ('${email}', '${hashPassword}')`, (err, result) => {
            if(err)
            return InternalServerError(res, err)
            next()
        })
    } catch (err) {
        return InternalServerError(res, err)
    }
}

export { AuthInformationsInsert }