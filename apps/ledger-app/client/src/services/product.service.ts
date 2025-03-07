import { CreateProductType, ProductType } from '../models/products.model';
import axiosInstance from './axios.defaults';

class ProductService {
	static async createProduct(data: CreateProductType) {
		return axiosInstance.post('/api/products', data);
	}

	static async updateProduct(data: ProductType) {
		return axiosInstance.patch('/api/products', data);
	}

	static async getProductList() {
		return axiosInstance.get(`/api/products/list`);
	}

	static async getProductsPage({
		pageNumber,
		itemsPerPage,
		orderBy,
	}: {
		pageNumber: number;
		itemsPerPage: number;
		orderBy: 'asc' | 'desc';
	}) {
		return axiosInstance.get(`/api/products/page?pageNumber=${pageNumber}&itemsPerPage=${itemsPerPage}&orderBy=${orderBy}`);
	}

	static async getProduct(id: string) {
		return axiosInstance.get(`/api/products/${id}`);
	}

	static async deleteProduct(id: string) {
		return axiosInstance.delete(`/api/products/${id}`);
	}
}

export default ProductService;
