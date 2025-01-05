import { CreateArticleType, ArticleType } from '../models/article.model';
import { CreateTagFor } from '../models/tags.model';
import axiosInstance from './axios.defaults';

class ArticleService {
	static async creteArticle(data: CreateArticleType) {
		return axiosInstance.post('/api/article', data);
	}

	static async updateArticle(data: ArticleType) {
		return axiosInstance.patch('/api/article', data);
	}

	static async getArticleList() {
		return axiosInstance.get(`/api/article/list`);
	}

	static async getArticle(articleId: string) {
		return axiosInstance.get(`/api/article/${articleId}`);
	}

	static async getArticleTags(articleId: string) {
		return axiosInstance.get(`/api/article/tags/${articleId}`);
	}

	static async createArticleTags(data: CreateTagFor) {
		return axiosInstance.patch(`/api/article/tag`, data);
	}

	static async deleteArticle(articleId: string) {
		return axiosInstance.delete(`/api/article/${articleId}`);
	}
}

export default ArticleService;
