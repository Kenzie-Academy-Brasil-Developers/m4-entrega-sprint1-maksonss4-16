import jwt from "jsonwebtoken";
import "dotenv/config";

export function tokenFromUserLogado(req, res, next) {
  let token = req.headers.authorization;

  token = token.split(" ")[1];
  //"Bearer <token>"
  //["Bearer", "<token>"]

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid Token." });
    }

    req.uuid_user_logado = decoded.sub;

    next();
  });
}
