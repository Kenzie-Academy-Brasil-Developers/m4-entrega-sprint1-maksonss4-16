import { listUserLogadoService } from "../services/users/listUserLogado.service";

export async function listUserLogadoController(req, res) {
  const userLogado = await listUserLogadoService(req.owner_id);
  return res.status(200).json(userLogado);
}
