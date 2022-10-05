import express from "express";
import { startDatabase } from "./database";
import "dotenv/config";
import { userRouter } from "./routers/routes";

const app = express();
app.use(express.json());
app.use("", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
  startDatabase();
});

export default app;
