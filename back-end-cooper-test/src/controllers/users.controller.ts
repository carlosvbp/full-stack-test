import { Request, Response } from "express";
import { UserReturn, UserReturnList } from "../interfaces/users.interface";
import { createUserService, deleteUserService, readAllUsersService } from "../services/users.service";
import User from "../entities/User.entity";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const user: UserReturn = await createUserService(req.body);
    return res.status(201).json(user);
};

export const readAllUsersController = async (req: Request, res: Response): Promise<Response> => {
    const users: UserReturnList = await readAllUsersService();
    return res.status(200).json(users);
};

export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
    const user: User  = res.locals.user;
    await deleteUserService(user);
    return res.status(204).json();
};

