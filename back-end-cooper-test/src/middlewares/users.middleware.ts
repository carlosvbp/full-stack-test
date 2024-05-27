import { NextFunction, Request, Response } from "express";
import User from "../entities/User.entity";
import { userRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";

export const verifyUniqueNickname = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { nickname } = req.body;
    const user: User | null = await userRepo.findOneBy({ nickname });
    if (user) throw new AppError("Nickname already exists.", 409);
    return next();
};

export const verifyUserExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId: any = req.params.id;
    const user = await userRepo.findOneBy({ id: userId });
    if (!user) throw new AppError("User not found", 400);
    res.locals.user = user;
    return next();
};

