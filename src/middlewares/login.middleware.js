import { users } from "../database";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export function loginMiddleware(req, res, next) {
  const user = users.find((user) => user.email === req.body.email);

  if (!user) {
    return res.status(401).json({ message: "Wrong email/password" });
  }

  const passwordMatch = bcrypt.compareSync(req.body.password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: "Wrong email/password" });
  }

  req.user = user;
  next();
}
