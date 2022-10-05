import { createUserService } from "../services/users/createUsers.service";

export async function createUserController(req, res) {
  try {
    const user = req.validatedBody;
    const createdUser = await createUserService(user);
    return res.status(201).json(createdUser);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
