import { users } from "../../database";

export function updateUserService(uuid, updateUser) {
  const userIndex = users.findIndex((user) => user.uuid === uuid);

  if (userIndex === -1) {
    return "User not found";
  }

  users[userIndex] = { ...users[userIndex], ...updateUser };

  return users[userIndex];
}
