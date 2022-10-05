import { database } from "../../database";
import { userWithOutPasswordSerializer } from "../../serializers";

export async function createUserService(newUser) {
  const { name, email, password, is_adm, updated_on, created_on } = newUser;

  try {
    const res = await database.query(
      `INSERT INTO
      users(name, email, password, is_adm, updated_on, created_on)
    VALUES 
      ($1, $2, $3, $4, $5, $6)
    RETURNING *;`,
      [name, email, password, is_adm, updated_on, created_on]
    );

    return await userWithOutPasswordSerializer.validate(res.rows[0], {
      stripUnknown: true,
    });
  } catch (error) {
    throw new Error(error);
  }
}
