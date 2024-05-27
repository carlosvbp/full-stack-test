import { z } from "zod";

const taskSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(120),
});

export const createTaskSchema = taskSchema.pick({
    name: true,
});

export const taskReturnSchema = taskSchema;

export const taskReturnListSchema = taskReturnSchema.array();

export const updateTaskSchema = createTaskSchema.partial();

