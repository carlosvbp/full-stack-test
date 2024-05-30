import { z } from "zod";
import { createTaskSchema, editTaskSchema, taskSchema } from "../schemas/tasks.schema";

export type Task = z.infer<typeof taskSchema>;
export type TaskCreate = z.infer<typeof createTaskSchema>;
export type TaskUpdate = z.infer<typeof editTaskSchema>;