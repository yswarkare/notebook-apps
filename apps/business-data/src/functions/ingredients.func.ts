import { IngredientType } from '../models/ingredient.model';

type InType = {
	name: string;
	description?: string;
};

export function createIngredients(arr: Array<InType> = []): Array<IngredientType> {
	return arr.map((el, index) => ({ id: (index + 1).toString(), ...el }));
}
