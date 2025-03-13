import { CreateRecipeType, RecipeType } from '../models/recipes.model';
import axiosInstance from './axios.defaults';

class RecipeService {
	static async createRecipe(data: CreateRecipeType) {
		return axiosInstance.post('/api/recipe', data);
	}

	static async updateRecipe(data: RecipeType) {
		return axiosInstance.patch('/api/recipe', data);
	}

	static async getRecipeList() {
		return axiosInstance.get(`/api/recipe/list`);
	}

	static async getRecipesPage({
		productId,
		pageNumber,
		itemsPerPage,
		orderBy,
	}: {
		productId: string;
		pageNumber: number;
		itemsPerPage: number;
		orderBy: 'asc' | 'desc';
	}) {
		return axiosInstance.get(
			`/api/recipe/page?productId=${productId}&pageNumber=${pageNumber}&itemsPerPage=${itemsPerPage}&orderBy=${orderBy}`
		);
	}

	static async getRecipe(id: string) {
		return axiosInstance.get(`/api/recipe/${id}`);
	}

	static async getRecipeByName(name: string) {
		return axiosInstance.get(`/api/recipe/name/${name}`);
	}

	static async deleteRecipe(id: string) {
		return axiosInstance.delete(`/api/recipe/${id}`);
	}
}

export default RecipeService;
