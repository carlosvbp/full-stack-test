import { Request, Response } from "express";
import { TaskBodyUpdate, TaskCreate } from "../interfaces/tasks.interface";
import { createTaskService, deleteTaskService, readAllTasksService, updateTaskService } from "../services/tasks.service";
import Task from "../entities/Task.entity";

export const createTaskController = async (req: Request, res: Response): Promise<Response> => {
    const userId = res.locals.userId;
    const data: TaskCreate = req.body;
    const newTask = await createTaskService(data, userId);
    return res.status(201).json(newTask);
};

export const readAllTasksController = async (req: Request, res: Response): Promise<Response> => {
    const userId = res.locals.userId;
    const tasks = await readAllTasksService(userId);
    return res.status(200).json(tasks);
};

export const updateTaskController = async (req: Request, res: Response): Promise<Response> => {
    const task : Task = res.locals.task;
    const data: TaskBodyUpdate = req.body;  
    const updatedTask = await updateTaskService(data, task);
    return res.status(200).json(updatedTask);
};

export const deleteTaskController = async (req: Request, res: Response): Promise<Response> => {
    const task: Task  = res.locals.task;
    await deleteTaskService(task);
    return res.status(204).json();
};