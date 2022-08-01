/* express */
import express from "express";
const router = express.Router();

/* imports */
import "dotenv/config";
import "../../database/database.js";

/* controllers */
import { AuthValidatePassword } from "../../controllers/authControllers/signin.js";
import {
  AuthInformationValidate,
  AuthVerifyAccountExists,
} from "../../controllers/authControllers/signup.js";
import { AuthInformationInsert } from "../../controllers/authControllers/signup.js";
import { Success } from "../../helpers/util.js";
import { JwtValidate } from "../../controllers/authControllers/validateToken.js";

/* routers */
router.post(
  "/signup",
  AuthInformationValidate,
  AuthVerifyAccountExists,
  AuthInformationInsert,
  async (req, res) => {
    Success(res, "Conta criada com sucesso.");
  }
);

router.post(
  "/signin",
  AuthInformationValidate,
  AuthValidatePassword,
  async (req, res) => {
    const { usertoken } = req.body;
    Success(res, { status: "Logado com sucesso!", token: usertoken });
  }
);

router.post("/validate-token", JwtValidate, (req, res) => {
  Success(res, "Logado com sucesso!");
});

export default router;
