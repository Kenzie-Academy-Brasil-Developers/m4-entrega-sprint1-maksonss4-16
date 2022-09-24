import { deleteUserService } from "../services/deleteUser.service";

export function deleteUserController(req, res) {
  const { uuid } = req.params;

  const deletedUser = deleteUserService(uuid);

  return res.json(deletedUser);
}
