import { object, string } from 'yup';

export const notebookSchema = object({
  id: string().trim().required(),
	title: string().min(3).max(255).trim().required()
})

export type NotebookType = {
	id: string;
	title: string;
};

export const createNotebookSchema = object({
	title: string().min(3).max(255).trim().required()
})

export type CreateNotebookType = {
	title: string;
};
