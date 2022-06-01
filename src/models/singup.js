import { DB } from "../services/db.js"
import { InternalServerError } from "../services/util.js"

import bcrypt from "bcrypt"

async function AuthInformationsInsert(req, res, next) {
    const { email, password } = req.body
    const passwordEncrypt = await bcrypt.hash(password, 10)

    try {
        DB.query(`INSERT INTO auth (email, password) VALUES ('${email}', '${passwordEncrypt}')`, (err, result) => {
            if(err)
            return InternalServerError(res, err)
            
            next()
        })
    } catch (err) {
        return InternalServerError(res, err)
    }
}

export { AuthInformationsInsert }