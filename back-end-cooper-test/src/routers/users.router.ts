import { Router } from "express";
import { validateBody, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { verifyUniqueNickname, verifyUserExists } from "../middlewares/users.middleware";
import { createUserController, deleteUserController, readAllUsersController } from "../controllers/users.controller";
import { createUserSchema } from "../schemas/users.schema";

export const userRouter: Router = Router();

userRouter.post("/",
    validateBody(createUserSchema),
    verifyUniqueNickname,
    createUserController
);
userRouter.get("/", readAllUsersController);
userRouter.delete("/:id",
    verifyToken,
    verifyPermissions,
    verifyUserExists,
    deleteUserController
);