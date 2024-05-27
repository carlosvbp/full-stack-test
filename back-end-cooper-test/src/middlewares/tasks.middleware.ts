import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppErrors.error";
import { taskRepo } from "../repositories";

export const verifyTaskExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const taskId: number = Number(req.params.id);
    const task = await taskRepo.findOne({
        where: {
            id: taskId
        },
        relations: {
            user: true
        }
    });
    if (!task) throw new AppError("Task not found", 404);
    res.locals.task = task;
    return next();
};   