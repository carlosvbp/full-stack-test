import Task from "../entities/Task.entity";
import User from "../entities/User.entity";
import AppError from "../errors/AppErrors.error";
import { TaskBodyUpdate, TaskCreate, TaskReturn, TaskReturnList } from "../interfaces/tasks.interface";
import { taskRepo, userRepo } from "../repositories";
import { taskReturnListSchema, taskReturnSchema } from "../schemas/tasks.schema";

export const createTaskService = async (data: TaskCreate, userId: number): Promise<TaskReturn> => {
    const user: User | null = await userRepo.findOneBy({ id: userId });
    if (!user) throw new AppError("User not found", 404);
    const task: Task = taskRepo.create({ ...data, user });
    await taskRepo.save(task);
    return taskReturnSchema.parse(task);
};

export const readAllTasksService = async (userId: number): Promise<TaskReturnList> => {
    const user: User | null = await userRepo.findOne({
        where: {
            id: userId
        }, relations: {
            tasks: true
        }
    });
    if(!user) throw new AppError("User not found", 404);
    return taskReturnListSchema.parse(user.tasks);
};

export const updateTaskService = async (data: TaskBodyUpdate, task: Task): Promise<TaskReturn> => {
    const taskUpdate: Task = taskRepo.create({...task, ...data});
    await taskRepo.save(taskUpdate);
    return taskReturnSchema.parse(taskUpdate);
};

export const deleteTaskService = async (task: Task): Promise<void> => {
    await taskRepo.remove(task);
};