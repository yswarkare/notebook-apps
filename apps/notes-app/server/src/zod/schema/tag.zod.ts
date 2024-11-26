import { z } from 'zod';
import validateZodSchema from '../validate/validateZodSchema';

const CreateTagSchema = z
	.object({
		name: z.string().max(255).trim(),
		userId: z.string().uuid().trim(),
	})
	.required()
	.strip();

export type CreateTagType = z.infer<typeof CreateTagSchema>;

const UpdateTagSchema = z
	.object({
		id: z.string().uuid().trim(),
		name: z.string().max(255).trim(),
	})
	.required()
	.strip();

export type UpdateTagType = z.infer<typeof UpdateTagSchema>;

const TagSchema = z
	.object({
		id: z.string().uuid().trim(),
		name: z.string().max(255).trim(),
		userId: z.string().uuid().trim(),
	})
	.required()
	.strip();

export type TagType = z.infer<typeof TagSchema>;

export const validateTagObject = validateZodSchema<TagType>(TagSchema);

const NotebookTagSchema = z
	.object({
		notebookId: z.string().uuid().trim(),
		tagId: z.string().uuid().trim(),
	})
	.required()
	.strip();

export type NotebookTagType = z.infer<typeof NotebookTagSchema>;

export const validateNotebookTag = validateZodSchema<NotebookTagType>(NotebookTagSchema);
