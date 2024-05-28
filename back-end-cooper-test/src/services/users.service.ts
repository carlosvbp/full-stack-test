import User from "../entities/User.entity";
import { UserCreate, UserReturn, UserReturnList } from "../interfaces/users.interface";
import { userRepo } from "../repositories";
import { userReturnListSchema, userReturnSchema } from "../schemas/users.schema";

export const createUserService = async (data: UserCreate): Promise<UserReturn> => {
    const user: User = userRepo.create(data);
    await userRepo.save(user);
    return userReturnSchema.parse(user);
};

export const readAllUsersService = async (): Promise<UserReturnList> => {
    const users: User[] = await userRepo.find();
    return userReturnListSchema.parse(users);
};

export const deleteUserService = async (user: User): Promise<void> => {
    await userRepo.remove(user);
};