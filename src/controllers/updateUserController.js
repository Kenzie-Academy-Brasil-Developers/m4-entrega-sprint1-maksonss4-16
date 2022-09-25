import { updateUserService } from "../services/users/updateUser.service";

export function updateUserController(req, res) {
  const { uuid } = req.params;
  if (req.tokenIsAdm || uuid === req.owner_id) {
    const updateUser = updateUserService(uuid, req.validatedBody);
    return res.status(200).json(updateUser);
  }

  return res.status(401).json({
    message: "Missing admin permissions",
  });
}
