import { createUserService } from "../services/createUsers.service";

export async function createUserController(req, res) {
  const { name, email, password, isAdm } = req.body;

  const user = await createUserService(name, email, password, isAdm);

  return res.json(user);
}
