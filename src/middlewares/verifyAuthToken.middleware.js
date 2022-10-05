import jwt from "jsonwebtoken";
import "dotenv/config";

export function verifyAuthTokenMiddleware(req, res, next) {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  token = token.split(" ")[1];
  //"Bearer <token>"
  //["Bearer", "<token>"]

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid Token." });
    }

    req.owner_id = decoded.sub;
    req.tokenIsAdm = decoded.user.is_adm;
    next();
  });
}
