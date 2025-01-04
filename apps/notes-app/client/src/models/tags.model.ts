import { object, string } from 'yup';

export type TagType = {
	id: string;
	name: string;
	notebookId: string;
};

export const tagSchema = object({
	id: string().trim().required(),
	name: string().max(255).trim().required(),
	notebookId: string().max(255).trim(),
});

export type CreateTagType = {
	name: string;
	notebookId?: string;
};

export type CreateTagFor = {
	id?: string;
	tag: {
		name: string;
	};
};

export const createTagSchema = object({
	name: string().max(255).trim().required(),
	notebookId: string().max(255).trim(),
});
