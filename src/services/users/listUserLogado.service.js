import { users } from "../../database";
import { userWithOutPasswordSerializer } from "../../serializers";

export async function listUserLogadoService(owner_id) {
  const userLogado = users.find((user) => user.uuid === owner_id);

  if (!userLogado) {
    return "usuário não encontrado";
  }

  return await userWithOutPasswordSerializer.validate(userLogado, {
    stripUnknown: true,
  });
}
