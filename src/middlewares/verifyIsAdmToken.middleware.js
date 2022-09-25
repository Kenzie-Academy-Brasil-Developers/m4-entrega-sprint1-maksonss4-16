export function verifyIsAdmTokenMiddleware(req, res, next) {
  if (!req.tokenIsAdm) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}
