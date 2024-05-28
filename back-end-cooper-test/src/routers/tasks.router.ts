import { Router } from "express";
import { validateBody, verifyToken } from "../middlewares/globals.middleware";
import { verifyTaskExists } from "../middlewares/tasks.middleware";
import {
    createTaskController, deleteTaskController,
    readAllTasksController, updateTaskController
} from "../controllers/tasks.controller";
import { createTaskSchema, updateTaskSchema } from "../schemas/tasks.schema";

export const taskRouter: Router = Router();

taskRouter.post("/",
    verifyToken,
    validateBody(createTaskSchema),
    createTaskController
);
taskRouter.get("/",
    verifyToken,
    readAllTasksController
);
taskRouter.patch("/:id",
    verifyToken,
    verifyTaskExists,
    validateBody(updateTaskSchema),
    updateTaskController
);
taskRouter.delete("/:id",
    verifyToken,
    verifyTaskExists,
    deleteTaskController
);