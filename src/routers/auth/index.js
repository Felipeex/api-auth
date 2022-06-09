/* express */
import express from "express";
const router = express.Router();

/* imports */
import "dotenv/config";

/* controllers */
import { AuthValidatePassword } from "../../controllers/authControllers/signin.js";
import {
  AuthInformationsValidate,
  AuthVerifyAccontExists,
} from "../../controllers/authControllers/signup.js";
import { AuthInformationsInsert } from "../../models/authModels/signup.js";
import { Success } from "../../services/util.js";
import { JwtValidate } from "../../controllers/authControllers/validateToken.js";

/* routers */
router.post(
  "/signup",
  AuthInformationsValidate,
  AuthVerifyAccontExists,
  AuthInformationsInsert,
  async (req, res) => {
    Success(res, "Conta criada com sucesso.");
  }
);

router.post(
  "/signin",
  AuthInformationsValidate,
  AuthValidatePassword,
  async (req, res) => {
    const { usertoken } = req.body;
    Success(res, { status: "Logado com sucesso!", token: usertoken });
  }
);

router.post("/validate-token", JwtValidate, (req, res) => {
  Success(res, "Logado com sucesso!" );
})

export default router;
