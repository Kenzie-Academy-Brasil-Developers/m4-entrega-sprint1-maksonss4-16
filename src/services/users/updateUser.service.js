import { users } from "../../database";
import { userWithOutPasswordSerializer } from "../../serializers";

export async function updateUserService(uuid, updateUser) {
  const userIndex = users.findIndex((user) => user.uuid === uuid);

  if (userIndex === -1) {
    return "User not found";
  }

  users[userIndex] = { ...users[userIndex], ...updateUser };

  return await userWithOutPasswordSerializer.validate(users[userIndex], {
    stripUnknown: true,
  });
}
