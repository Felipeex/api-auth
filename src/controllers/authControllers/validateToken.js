/* imports */
import { Bad } from "../../helpers/util.js";
import jwt from "jsonwebtoken";

function JwtValidate(req, res, next) {
  const token = req.headers["authorization"];
  jwt.verify(token, process.env.JWT__TOKEN, (err, decoded) => {
    if (err) Bad(res, "Falha ao Autenticar");

    req.body.user = decoded.user_id;
    next();
  });
}

export { JwtValidate };
