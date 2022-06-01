import { DB } from "../services/db.js"
import { InternalServerError } from "../services/util.js"

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

async function AuthInformationsInsert(req, res, next) {
    const { email, password } = req.body
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    try {
        DB.query(`INSERT INTO auth (email, password) VALUES ('${email}', '${passwordHash}')`, (err, result) => {
            if(err)
            return InternalServerError(res, err)
            
            const jwttoken = jwt.sign({ user_id: result.insertId }, '9324823husdncjbn34he2b4uh2nedioqunbINEBWiuhebwuqde', { expiresIn: '1d' })
            req.body.userJWT = jwttoken

            next()
        })
    } catch (err) {
        return InternalServerError(res, err)
    }
}

export { AuthInformationsInsert }