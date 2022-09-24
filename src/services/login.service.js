import { users } from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";
import "dotenv/config";

export function loginService(email, password) {
  const user = users.find((ele) => ele.email === email);

  if (!user) {
    return "Email ou senha inválidos";
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return "Email ou senha inválidos";
  }

  const token = jwt.sign({ user }, process.env.SECRET_KEY, {
    expiresIn: "24h",
    subject: user.uuid,
  });

  return token;
}
