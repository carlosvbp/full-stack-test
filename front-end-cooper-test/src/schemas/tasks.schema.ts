import { z } from "zod";

export const taskSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(120),
});

export const createTaskSchema = taskSchema.omit({
    id: true
});

export const editTaskSchema = createTaskSchema;