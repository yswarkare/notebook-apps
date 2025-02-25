import { object, string } from 'yup';
import { TagType } from './tags.model';

export const articleSchema = object({
	id: string().trim(),
	name: string().min(3).max(255).trim().required(),
});

export const createArticleSchema = object({
	name: string().min(3).max(255).trim().required(),
});

export type ArticleTagsAndRefs = {
	tags: Array<TagType>;
	refUrls: Array<object>;
};


export type ArticleType = {
	id: string;
	name: string;
	notebookId: string;
};

export type CreateArticleType2 = {
	name: string;
	notebookId: string;
};

export type CreateArticleType = {
	name: string;
};
