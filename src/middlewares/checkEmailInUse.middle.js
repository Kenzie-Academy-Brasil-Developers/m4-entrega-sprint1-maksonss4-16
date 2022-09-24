import { users } from "../database";

export function checkEmailInUse(req, res, next) {
  const { email } = req.body;
  const isEmailInUse = users.find((user) => user.email === email);

  if (isEmailInUse) {
    return res.status(400).json({ message: "E-mail already registered" });
  }

  next();
}
