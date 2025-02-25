import { CreateNotebookType, NotebookType } from '../models/notebook.model';
import { CreateTagFor } from '../models/tags.model';
import axiosInstance from './axios.defaults';

class NotebookService {
	static async creteNotebook(data: CreateNotebookType) {
		return axiosInstance.post('/api/notebook', data);
	}

	static async updateNotebook(data: NotebookType) {
		return axiosInstance.patch('/api/notebook', data);
	}

	static async getNotebookList() {
		return axiosInstance.get(`/api/notebook/list`);
	}

	static async getNotebook(notebookId: string) {
		return axiosInstance.get(`/api/notebook/${notebookId}`);
	}

	static async getNotebookTags(notebookId: string) {
		return axiosInstance.get(`/api/notebook/tags/${notebookId}`);
	}

	static async createNotebookTags(data: CreateTagFor) {
		return axiosInstance.patch(`/api/notebook/tag`, data);
	}

	static async deleteNotebook(notebookId: string) {
		return axiosInstance.delete(`/api/notebook/${notebookId}`);
	}
}

export default NotebookService;
