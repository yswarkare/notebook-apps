import { object, string } from 'yup';
import { TagType } from './tags.model';

export const notebookSchema = object({
	id: string().trim(),
	name: string().min(3).max(255).trim().required(),
});

export type NotebookType = {
	id: string;
	name: string;
};

export const createNotebookSchema = object({
	name: string().min(3).max(255).trim().required(),
});

export type CreateNotebookType = {
	name: string;
};

export type NotebookTagsAndRefs = {
	tags: Array<TagType>;
	refUrls: Array<object>;
};


