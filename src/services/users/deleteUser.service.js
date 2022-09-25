import { users } from "../../database";

export function deleteUserService(uuid) {
  const userIndex = users.findIndex((user) => user.uuid === uuid);

  if (userIndex === -1) {
    return { erro: "User not found" };
  }

  users.splice(userIndex, 1);
  return { message: "User deleted with success" };
}
