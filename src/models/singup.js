import { DB } from "../services/db.js"
import { InternalServerError } from "../services/util.js"

async function AuthInformationsInsert(req, res, next) {
    const { email, password } = req.body

    try {
        DB.query(`INSERT INTO auth (email, password) VALUES ('${email}', '${password}')`, (err, result) => {
            if(err)
            return InternalServerError(res, err)
            
            next()
        })
    } catch (err) {
        return InternalServerError(res, err)
    }
}

export { AuthInformationsInsert }