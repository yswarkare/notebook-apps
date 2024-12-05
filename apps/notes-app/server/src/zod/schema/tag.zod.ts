import { z } from 'zod';
import validateZodSchema from '../validate/validateZodSchema';

const CreateTagSchema = z
	.object({
		name: z.string().max(255).trim(),
		userId: z.string().uuid().trim(),
		notebookId: z.string().uuid().trim(),
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

export const validateTag = validateZodSchema<TagType>(TagSchema);
export const validateCreateTag = validateZodSchema<CreateTagType>(CreateTagSchema);
export const validateUpdateTag = validateZodSchema<UpdateTagType>(UpdateTagSchema);
