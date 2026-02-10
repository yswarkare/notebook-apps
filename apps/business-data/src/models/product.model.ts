import { RecipeType } from "./recipe.model";

export type ProductType = {
	id: string;
	name: string;
	description?: string;
};

export type ProductRelationsType = {
	id: string;
	name: string;
	description?: string;
  recipes: Array<RecipeType>
};
