import "dotenv/config";
import { compare } from "bcryptjs";
import User from "../entities/User.entity";
import AppError from "../errors/AppErrors.error";
import { userRepo } from "../repositories";
import { sign } from "jsonwebtoken";
import { LoginReturn, UserLogin } from "../interfaces/users.interface";

export const loginService = async (data: UserLogin): Promise<LoginReturn> => {
    const { nickname } = data;
    const user: User | null = await userRepo.findOneBy({ nickname });
    if (!user) throw new AppError("Invalid credentials", 401);
    const comparePass = await compare(data.password, user.password);
    if (!comparePass) throw new AppError("Invalid credentials", 401);
    const token: string = sign(
        { nickname: user.nickname },
        process.env.SECRET_KEY!,
        { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN! }
    );
    return { token };
};