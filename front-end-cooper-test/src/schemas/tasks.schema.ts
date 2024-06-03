import { z } from "zod";

export const taskSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(120).min(1, "Inválido"),
    done: z.boolean().default(false)
});

export const createTaskSchema = taskSchema.pick({
    name: true
});

export const editTaskSchema = createTaskSchema;