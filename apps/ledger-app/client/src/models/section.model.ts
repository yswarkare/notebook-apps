import { object, string } from 'yup';

export const sectionSchema = object({
	id: string().trim(),
	name: string().min(3).max(255).trim().required(),
  content: string().min(3).max(20000).trim().required(),
});

export const createSectionSchema = object({
	name: string().min(3).max(255).trim().required(),
  content: string().min(3).max(20000).trim().required(),
});

export type SectionType = {
	id: string;
	name: string;
	content: string;
	articleId: string;
};

export type CreateSectionType2 = {
	name: string;
	content: string;
	articleId: string;
};

export type CreateSectionType = {
	name: string;
	content: string;
};
