import { listUsersService } from "../services/listUsers.service";

export function listUsersController(req, res) {
  const users = listUsersService();

  return res.status(200).json(users);
}
