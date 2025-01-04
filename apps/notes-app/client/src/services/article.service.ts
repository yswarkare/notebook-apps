import { CreateNotebookType, NotebookType } from '../models/notebook.model';
import { CreateTagFor } from '../models/tags.model';
import axiosInstance from './axios.defaults';

class ArticleService {
	static async creteNotebook(data: CreateNotebookType) {
		return axiosInstance.post('/api/article', data);
	}

	static async updateNotebook(data: NotebookType) {
		return axiosInstance.patch('/api/article', data);
	}

	static async getNotebookList() {
		return axiosInstance.get(`/api/article/list`);
	}

	static async getNotebook(notebookId: string) {
		return axiosInstance.get(`/api/article/${notebookId}`);
	}

	static async getNotebookTags(notebookId: string) {
		return axiosInstance.get(`/api/article/tags/${notebookId}`);
	}

	static async createNotebookTags(data: CreateTagFor) {
		return axiosInstance.patch(`/api/article/tag`, data);
	}

	static async deleteNotebook(notebookId: string) {
		return axiosInstance.delete(`/api/article/${notebookId}`);
	}
}

export default ArticleService;
