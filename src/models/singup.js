/* Database */
import { DB } from "../services/db.js"

/* Tratamento de erros */
import { InternalServerError } from "../services/util.js"

/* Tokens */
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

/* Insertar Valores ao fazer o cadastro. */
async function AuthInformationsInsert(req, res, next) {
    const { email, password } = req.body
    const passwordHash = await bcrypt.hash(password, 10)

    try {
        DB.query(`INSERT INTO auth (email, password) VALUES ('${email}', '${passwordHash}')`, (err, result) => {
            if(err)
            return InternalServerError(res, err)

            GenerateJWT(req, result.insertId)
            next()
        })
    } catch (err) {
        return InternalServerError(res, err)
    }
}

/* Gerar Token JWT (Json Web Token). */
function GenerateJWT(req, id) {
    const body = req.body
    const JWTtoken = jwt.sign({ user_id: id }, '9324823husdncjbn34he2b4uh2nedioqunbINEBWiuhebwuqde', { expiresIn: '1d' })
    return body.userJWT = JWTtoken
}

export { AuthInformationsInsert }