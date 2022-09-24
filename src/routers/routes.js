import { Router } from "express";
import { createUserController } from "../controllers/createUser.controller";
import { deleteUserController } from "../controllers/deleteUser.controller";
import { listUserLogadoController } from "../controllers/listUserLogado.controller";
import { listUsersController } from "../controllers/listUsers.controller";
import { loginController } from "../controllers/login.controller";
import { updateUserController } from "../controllers/updateUser.controller";
import { checkEmailInUse } from "../middlewares/checkEmailInUse.middle";
import { checkIsTokenFromAdmin } from "../middlewares/checkIsTokenFromAdmin.middle";
import { tokenFromUserLogado } from "../middlewares/tokenFromUserLogado.middle";
import { verifyAuthToken } from "../middlewares/verifyAuthToken";

export const userRouter = Router();
userRouter.post("/users", checkEmailInUse, createUserController);
userRouter.post("/login", loginController);
userRouter.get(
  "/users",
  verifyAuthToken,
  checkIsTokenFromAdmin,
  listUsersController
);
userRouter.get(
  "/users/profile",
  verifyAuthToken,
  tokenFromUserLogado,
  listUserLogadoController
);
userRouter.patch("/users/:uuid", verifyAuthToken, updateUserController);
userRouter.delete("/users/:uuid", verifyAuthToken, deleteUserController);
