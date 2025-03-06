import { CreateIngredientType, IngredientType } from '../models/ingredient.model';
import axiosInstance from './axios.defaults';

class IngredientService {
	static async createIngredient(data: CreateIngredientType) {
		return axiosInstance.post('/api/ingredients', data);
	}

	static async updateIngredient(data: IngredientType) {
		return axiosInstance.patch('/api/ingredients', data);
	}

	static async getIngredientList() {
		return axiosInstance.get(`/api/ingredients/list`);
	}

	static async getIngredientsPage({
		pageNumber,
		itemsPerPage,
		orderBy,
	}: {
		pageNumber: number;
		itemsPerPage: number;
		orderBy: 'asc' | 'desc';
	}) {
		return axiosInstance.get(`/api/ingredients/page?pageNumber=${pageNumber}&itemsPerPage=${itemsPerPage}&orderBy=${orderBy}`);
	}

	static async getIngredient(id: string) {
		return axiosInstance.get(`/api/ingredients/${id}`);
	}

	static async deleteIngredient(id: string) {
		return axiosInstance.delete(`/api/ingredients/${id}`);
	}
}

export default IngredientService;
