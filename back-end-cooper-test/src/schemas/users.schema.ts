import { z } from "zod";
import { taskReturnSchema } from "./tasks.schema";

const userSchema = z.object({
    id: z.number().positive(),
    nickname: z.string().max(25),
    password: z.string().max(120),
    createdAt: z.string()
});

export const createUserSchema = userSchema.pick({
    nickname: true,
    password: true
});

export const userReturnSchema = userSchema.omit({
    password: true
});

export const userReturnListSchema = userReturnSchema.array();

export const userReturnTasksSchema =
    userReturnSchema.extend({
        tasks: taskReturnSchema.array()
    });

export const userLoginSchema = createUserSchema;

