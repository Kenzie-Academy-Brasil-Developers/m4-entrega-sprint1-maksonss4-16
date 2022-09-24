import { loginService } from "../services/login.service";

export function loginController(req, res) {
  const { email, password } = req.body;

  const token = loginService(email, password);

  return res.json(token);
}
