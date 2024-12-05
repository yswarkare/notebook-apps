import { z } from "zod";
import validateZodSchema from "../validate/validateZodSchema";

const NotebookTagSchema = z
	.object({
		notebookId: z.string().uuid().trim(),
		tagId: z.string().uuid().trim(),
	})
	.required()
	.strip();

export type NotebookTagType = z.infer<typeof NotebookTagSchema>;

export const validateNotebookTag = validateZodSchema<NotebookTagType>(NotebookTagSchema);
