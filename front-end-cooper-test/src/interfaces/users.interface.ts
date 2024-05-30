import { z } from "zod";
import { createUserSchema, loginSchema, userSchema } from "../schemas/users.schema";

export type User = z.infer<typeof userSchema>;
export type UserLogin = z.infer<typeof loginSchema>;
export type UserCreate = z.infer<typeof createUserSchema>;

