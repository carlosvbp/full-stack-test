import { z } from "zod";

export const userSchema = z.object({
    id: z.number().positive(),
    nickname: z.string().max(25).min(1, "O apelido é obrigatório"),
    password: z.string().max(120).min(1, "A senha é obrigatória"),
    createdAt: z.string()
});

export const loginSchema = userSchema.pick({
    nickname: true,
    password: true
});

export const createUserSchema = loginSchema;

