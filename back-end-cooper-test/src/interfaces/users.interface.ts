import { z } from "zod";
import {
    createUserSchema,
    userLoginSchema,
    userReturnListSchema,
    userReturnSchema
} from "../schemas/users.schema";
import { DeepPartial, Repository } from "typeorm";
import User from "../entities/User.entity";

export type UserCreate = z.infer<typeof createUserSchema>;
export type UserReturn = z.infer<typeof userReturnSchema>;
export type UserReturnList = z.infer<typeof userReturnListSchema>;
export type UserBodyUpdate = DeepPartial<UserCreate>;
export type UserLogin = z.infer<typeof userLoginSchema>;
export type LoginReturn = { token: string };
export type UserRepo = Repository<User>;
