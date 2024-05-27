import { Router } from "express";
import { userRouter } from "./users.router";
import { taskRouter } from "./tasks.router";
import { sessionRouter } from "./session.router";

export const routes: Router = Router();

routes.use("/users", userRouter);
routes.use("/login", sessionRouter);
routes.use("/tasks", taskRouter);
