import User from "./entities/User.entity";
import Task from "./entities/Task.entity";
import { AppDataSource } from "./data-source";
import { UserRepo } from "./interfaces/users.interface";
import { TaskRepo } from "./interfaces/tasks.interface";

export const userRepo: UserRepo = AppDataSource.getRepository(User);
export const taskRepo: TaskRepo = AppDataSource.getRepository(Task);