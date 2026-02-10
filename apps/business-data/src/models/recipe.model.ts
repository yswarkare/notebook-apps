export type RecipeIngredientType = {
	id: string;
	ingredientId: string;
	quantity: number;
	description?: string;
};

export type RecipeType = {
	id: string;
	name: string;
	description?: string;
	productId: string;
	recipeIngredients: Array<RecipeIngredientType>;
};

export type ProductBatch = {
	id: string;
	name: string;
	description?: string;
	recipeId: string;
	quantity: number;
	cost: number;
};
