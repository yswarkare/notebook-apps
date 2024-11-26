import { z } from 'zod';
import validateZodSchema from '../validate/validateZodSchema';

const UpdateNotebookSchema = z
	.object({
		id: z.string().uuid().trim(),
		title: z.string().max(255).trim(),
	})
	.required()
	.strip();

const CreateNotebookSchema = z
	.object({
		title: z.string().max(255).trim(),
		userId: z.string().uuid().trim(),
	})
	.required()
	.strip();

const NotebookSchema = z
	.object({
		id: z.string().uuid().trim(),
		title: z.string().max(255).trim(),
		userId: z.string().uuid().trim(),
	})
	.required()
	.strip();

export type NotebookType = z.infer<typeof NotebookSchema>;
export type UpdateNotebookType = z.infer<typeof UpdateNotebookSchema>;
export type CreateNotebookType = z.infer<typeof CreateNotebookSchema>;

export const validateNotebook = validateZodSchema<NotebookType>(NotebookSchema);
export const validateUpdateNotebook = validateZodSchema<UpdateNotebookType>(UpdateNotebookSchema);
export const validateCreateNotebook = validateZodSchema<CreateNotebookType>(CreateNotebookSchema);
