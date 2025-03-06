import { object, string } from 'yup';

export const ingredientSchema = object({
	id: string().trim(),
	name: string().min(3).max(150).trim().required(),
	description: string().min(3).max(255).trim(),
});

export type IngredientType = {
	id: string;
	name: string;
  description: string;
};

export const createIngredientSchema = object({
	name: string().min(3).max(150).trim().required(),
	description: string().min(3).max(255).trim(),
});

export type CreateIngredientType = {
	name: string;
	description: string;
};
