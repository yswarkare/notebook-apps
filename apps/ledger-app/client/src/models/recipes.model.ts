import { object, string } from 'yup';

export const recipeSchema = object({
  id: string().trim().uuid(),
  name: string().min(3).max(150).trim().required(),
  description: string().min(3).max(255).trim(),
  productId: string().trim().uuid(),
});

export type RecipeType = {
  id: string;
  name: string;
  description: string;
};

export const createRecipeSchema = object({
  name: string().min(3).max(150).trim().required(),
  description: string().min(3).max(255).trim(),
});

export type CreateRecipeType = {
  name: string;
  description: string;
  productId: string;
};
