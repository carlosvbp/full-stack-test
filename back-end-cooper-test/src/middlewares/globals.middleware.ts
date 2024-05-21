import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import AppError from "../errors/AppErrors.error";
import { verify } from "jsonwebtoken";

export const validateBody = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction): void => {
    req.body = schema.parse(req.body);
    return next();
};

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    const { authorization } = req.headers;
    if (!authorization) throw new AppError("Missing bearer token", 401);
    const token: string = authorization.split(" ")[1];
    const decoded = verify(token, process.env.SECRET_KEY!);
    res.locals = { ...res.locals, decoded };
    return next();
};
