import jwt from "jsonwebtoken";
import "dotenv/config";

export function verifyAuthToken(req, res, next) {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing Authorization Token." });
  }

  token = token.split(" ")[1];
  //"Bearer <token>"
  //["Bearer", "<token>"]

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid Token." });
    }

    next();
  });
}
