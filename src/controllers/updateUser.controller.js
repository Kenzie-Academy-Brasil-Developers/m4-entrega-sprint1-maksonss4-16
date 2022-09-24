import { updateUserService } from "../services/updateUser.service";

export async function updateUserController(req, res) {
  const { uuid } = req.params;
  const { name, email, password } = req.body;

  const updateUser = await updateUserService(uuid, name, email, password);

  return res.json(updateUser);
}
