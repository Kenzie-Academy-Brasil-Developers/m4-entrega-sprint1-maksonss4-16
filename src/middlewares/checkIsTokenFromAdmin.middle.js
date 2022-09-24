import jwt from "jsonwebtoken";
import "dotenv/config";

export function checkIsTokenFromAdmin(req, res, next) {
  let token = req.headers.authorization;

  token = token.split(" ")[1];
  //"Bearer <token>"
  //["Bearer", "<token>"]

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid Token." });
    }
    if (!decoded.user.isAdm) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    next();
  });
}
