import { Client } from "pg"; // é uma classe utilizada para afzer a conexão com o banco de dados
import "dotenv/config";

export const database = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB,
  port: 5432,
});

export async function startDatabase() {
  await database.connect(); //método utilizado para fazer a conexão com banco de dados
  console.log("Database connected!");
}

//export const users = [];
