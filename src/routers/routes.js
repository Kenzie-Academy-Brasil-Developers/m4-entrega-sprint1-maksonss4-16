import { Router } from "express";
import { createUserController } from "../controllers/createUser.controller";
import { deleteUserController } from "../controllers/deleteUser.controller";
import { listUserLogadoController } from "../controllers/listUserLogado.controller";
import { listUsersController } from "../controllers/listUsers.controller";
import { loginUserController } from "../controllers/loginUser.controller";
import { updateUserController } from "../controllers/updateUserController";
import { checkEmailInUseMiddleware } from "../middlewares/checkEmailInUse.middleware";
import { loginMiddleware } from "../middlewares/login.middleware";
import { validateSerializerMiddleware } from "../middlewares/validateSerializer.middleware";
import { verifyAuthTokenMiddleware } from "../middlewares/verifyAuthToken.middleware";
import { verifyIsAdmTokenMiddleware } from "../middlewares/verifyIsAdmToken.middleware";
import { createUserSerializer } from "../serializers";
import {
  loginUserSerializer,
  updateUserSerializer,
} from "../serializers/user.serializer";

export const userRouter = Router();
userRouter.post(
  "/users",
  // checkEmailInUseMiddleware,
  validateSerializerMiddleware(createUserSerializer),
  createUserController
);
userRouter.post(
  "/login",
  validateSerializerMiddleware(loginUserSerializer),
  loginMiddleware,
  loginUserController
);
userRouter.get(
  "/users",
  verifyAuthTokenMiddleware,
  verifyIsAdmTokenMiddleware,
  listUsersController
);
userRouter.get(
  "/users/profile",
  verifyAuthTokenMiddleware,
  listUserLogadoController
);
userRouter.patch(
  "/users/:uuid",
  verifyAuthTokenMiddleware,
  // checkEmailInUseMiddleware,
  validateSerializerMiddleware(updateUserSerializer),
  updateUserController
);
userRouter.delete(
  "/users/:uuid",
  verifyAuthTokenMiddleware,
  deleteUserController
);
