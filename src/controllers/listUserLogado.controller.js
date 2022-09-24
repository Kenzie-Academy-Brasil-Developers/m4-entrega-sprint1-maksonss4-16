import { listUserLogadoService } from "../services/listUserLogado.service";

export function listUserLogadoController(req, res) {
  const userLogado = listUserLogadoService(req.uuid_user_logado);
  return res.status(200).json(userLogado);
}
