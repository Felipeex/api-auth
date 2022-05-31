import { DB } from "../services/db.js"
import { badResquest, InternalServerError } from "../services/util.js"
import bcrypt from "bcrypt"

function AuthValidatePassword(req, res, next) {
    const { email, password } = req.body

    DB.query(`SELECT user_id, password FROM auth WHERE email = '${email}'`, async (err, result) => {
        if(err)
        return InternalServerError(res, err)

        if(result.length < 1)
        return badResquest(res, "Conta não Existente, ou dados errados!")

        const match = await bcrypt.compare(password, result[0].password)

        console.log(match)

        if(!match)
        return badResquest(res, "Falha ao logar, Verifique seus dados.")

        next()
    })
}

export { AuthValidatePassword }