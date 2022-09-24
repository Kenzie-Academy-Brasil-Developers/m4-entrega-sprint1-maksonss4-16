import { users } from "../database";

export function listUserLogadoService(uuid) {
  const userLogado = users.find((user) => user.uuid === uuid);

  if (!userLogado) {
    return "usuário não encontrado";
  }

  return userLogado;
}
