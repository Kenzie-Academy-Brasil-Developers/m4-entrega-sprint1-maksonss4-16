import { users } from "../database";
import * as bcrypt from "bcryptjs";

export async function updateUserService(uuid, name, email, password) {
  const updateUser = {
    uuid,
    updateOn: new Date(),
  };

  if (name) {
    updateUser.name = name;
  }

  if (email) {
    updateUser.email = email;
  }

  if (password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    updateUser.password = hashedPassword;
  }

  const userIndex = users.findIndex((ele) => ele.uuid === uuid);

  if (userIndex === -1) {
    return "User not found";
  }

  users[userIndex] = { ...users[userIndex], ...updateUser };

  return users[userIndex];
}
