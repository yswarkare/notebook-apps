import { ArticleType, CreateArticleType2 } from '../models/article.model';
import { CreateTagFor } from '../models/tags.model';
import axiosInstance from './axios.defaults';

class ArticleService {
	static async creteArticle(data: CreateArticleType2) {
		return axiosInstance.post('/api/articles', data);
	}

	static async updateArticle(data: ArticleType) {
		return axiosInstance.patch('/api/articles', data);
	}

	static async getArticleList(notebookId: string) {
		return axiosInstance.get(`/api/articles/list/${notebookId}`);
	}

	static async getArticle(articleId: string) {
		return axiosInstance.get(`/api/articles/${articleId}`);
	}

	static async getArticleTags(articleId: string) {
		return axiosInstance.get(`/api/articles/tags/${articleId}`);
	}

	static async createArticleTags(data: CreateTagFor) {
		return axiosInstance.post(`/api/articles/tag`, data);
	}

	static async deleteArticle(articleId: string) {
		return axiosInstance.delete(`/api/articles/${articleId}`);
	}
}

export default ArticleService;
