import { z } from "zod";
import {
    createTaskSchema,
    taskReturnListSchema,
    taskReturnSchema,
} from "../schemas/tasks.schema";
import { DeepPartial, Repository } from "typeorm";
import Task from "../entities/Task.entity";

export type TaskCreate = z.infer<typeof createTaskSchema>;
export type TaskReturn = z.infer<typeof taskReturnSchema>;
export type TaskReturnList = z.infer<typeof taskReturnListSchema>;
export type TaskBodyUpdate = DeepPartial<TaskCreate>;
export type TaskRepo = Repository<Task>;