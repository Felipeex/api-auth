import { DB } from "../services/db.js"
import { InternalServerError } from "../services/util.js"

async function AuthInformationsInsert(req, res) {
    const { email, password } = req.body

    try {

    } catch (err) {
        return InternalServerError(res, err)
    }
}

export { AuthInformationsInsert }