import { database } from "../database";
import * as bcrypt from "bcryptjs";

export async function loginMiddleware(req, res, next) {
  try {
    // const user = users.find((user) => user.email === req.body.email);

    const resDatabase = await database.query(
      `SELECT 
      * 
    FROM 
      users u 
    WHERE 
      u.email = $1;`,
      [req.body.email]
    );

    const user = resDatabase.rows[0];
    console.log("user18", user);
    if (!user) {
      return res.status(401).json({ message: "Wrong email/password" });
    }

    const passwordMatch = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Wrong email/password" });
    }

    req.user = user;
    next();
  } catch (error) {
    throw new Error(error);
  }
}
