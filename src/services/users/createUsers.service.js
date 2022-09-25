import { users } from "../../database";
import { userWithOutPasswordSerializer } from "../../serializers";

export async function createUserService(newUser) {
  users.push(newUser);

  return await userWithOutPasswordSerializer.validate(newUser, {
    stripUnknown: true,
  });
}
