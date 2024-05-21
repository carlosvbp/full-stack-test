import { Repository } from "typeorm";
import User from "./entities/User.entity";
import Task from "./entities/Task.entity";
import { AppDataSource } from "./data-source";


export const userRepo: Repository<User> = AppDataSource.getRepository(User);
export const taskRepo: Repository<Task> = AppDataSource.getRepository(Task);