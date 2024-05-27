import { Router } from "express";
import { validateBody } from "../middlewares/globals.middleware";
import { userLoginSchema } from "../schemas/users.schema";
import { loginController } from "../controllers/session.controller";

export const sessionRouter: Router = Router();

sessionRouter.post("/",
    validateBody(userLoginSchema),
    loginController
);