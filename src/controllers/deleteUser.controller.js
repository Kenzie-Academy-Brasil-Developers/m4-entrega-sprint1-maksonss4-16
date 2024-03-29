import { deleteUserService } from "../services/users/deleteUser.service";

export function deleteUserController(req, res) {
  const { uuid } = req.params;
  if (req.tokenIsAdm || uuid === req.owner_id) {
    const updateUser = deleteUserService(uuid);
    return res.status(200).json(updateUser);
  }

  return res.status(401).json({
    message: "Missing admin permissions",
  });
}
