import { database } from "../../database";

export async function listUsersService() {
  try {
    const res = await database.query(`SELECT * FROM users;`, []);

    const users = res.rows;

    return users;
  } catch (error) {
    throw new Error(error);
  }
}
