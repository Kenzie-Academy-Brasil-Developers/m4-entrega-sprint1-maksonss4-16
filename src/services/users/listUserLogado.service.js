import { database } from "../../database";
import { userWithOutPasswordSerializer } from "../../serializers";

export async function listUserLogadoService(owner_id) {
  try {
    const res = await database.query(
      `SELECT 
      * 
    FROM 
      users u 
    WHERE 
      u.uuid = $1;`,
      [owner_id]
    );
    console.log("res15", res);
    const userLogado = res.rows[0];

    if (!userLogado) {
      return "usuário não encontrado";
    }

    return await userWithOutPasswordSerializer.validate(userLogado, {
      stripUnknown: true,
    });
  } catch (error) {
    throw new Error(error);
  }
}
