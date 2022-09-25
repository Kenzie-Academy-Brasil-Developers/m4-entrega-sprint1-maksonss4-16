import { loginUserService } from "../services/users/loginUser.service";

export function loginUserController(req, res) {
  const token = loginUserService(req.user);
  return res.status(200).json({ token });
}
