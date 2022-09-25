import { updateUserService } from "../services/users/updateUser.service";

export async function updateUserController(req, res) {
  const { uuid } = req.params;

  if (req.tokenIsAdm || uuid === req.owner_id) {
    const updateUser = await updateUserService(uuid, req.validatedBody);
    return res.status(200).json(updateUser);
  } else {
    return res.status(401).json({ message: "Missing admin permissions" });
  }
}
