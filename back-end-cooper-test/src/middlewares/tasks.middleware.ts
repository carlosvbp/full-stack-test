import { NextFunction, Request, Response } from "express";
import { taskRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";
import Task from "../entities/Task.entity";

export const verifyTaskExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const task: Task | null = await taskRepo.findOneBy({id: Number(id)});
    if(!task) throw new AppError("Task not found.", 404);
    return next();
}   