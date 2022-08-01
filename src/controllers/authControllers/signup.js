/* Database */
import { users } from "../../models/users.js";

/* Tratamento de erros */
import { Bad, InternalServerError } from "../../helpers/util.js";

/* Verificar sé a requisição veio com os paramentros preenchidos. */
function AuthInformationValidate(req, res, next) {
  const { email, password } = req.body;

  if (!email) return Bad(res, "Email Invalido.");

  if (!password) return Bad(res, "Senha Invalida.");

  if (email.length >= 25) return Bad(res, "Email muito Extenso.");
  next();
}

/* Verificar sé uma conta existe (Email). */
async function AuthVerifyAccountExists(req, res, next) {
  const { email } = req.body;

  try {
    const usersByEmail = await users.find({ email: email.toLowerCase() });
    if (usersByEmail.length > 0) return Bad(res, "Conta Existente");

    next();
  } catch (err) {
    InternalServerError(res, err);
  }
}

/* Insertar Valores ao fazer o cadastro. */
async function AuthInformationInsert(req, res, next) {
  const { email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);

  try {
    await users.create({
      email: email.toLowerCase(),
      password: hashPassword,
    });

    next();
  } catch (err) {
    InternalServerError(res, err);
  }
}

export {
  AuthInformationValidate,
  AuthVerifyAccountExists,
  AuthInformationInsert,
};
