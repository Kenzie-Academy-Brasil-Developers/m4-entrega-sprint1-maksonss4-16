import jwt from "jsonwebtoken";
import "dotenv/config";

export function loginUserService(user) {
  const token = jwt.sign({ user }, process.env.SECRET_KEY, {
    expiresIn: "24h",
    subject: user.uuid,
  });

  return token;
}
