import { Bad } from "../../services/util.js"

function JwtValidate(req, res, next) {
    const token = req.headers['authorization']
    jwt.verify(token, process.env.JWT__TOKEN, (err, decoded) => {
        if(err) (Bad(res, 'Falha ao Autenticar'))
        console.log(decoded.user_id)
        req.body.user = decoded.user_id
        next()
    })
}

export { JwtValidate }