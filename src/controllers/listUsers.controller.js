import { listUsersService } from "../services/users/listUsers.service";

export async function listUsersController(req, res) {
  const users = await listUsersService();
  return res.status(200).json(users);
}
