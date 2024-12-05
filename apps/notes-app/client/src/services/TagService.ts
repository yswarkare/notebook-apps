import { CreateTagType, TagType } from '../models/tags.model';
import axiosInstance from './axios.defaults';

class TagService {
	static async creteTag(data: CreateTagType) {
		return axiosInstance.post('/api/tag', data);
	}

	static async updateTag(data: TagType) {
		return axiosInstance.patch('/api/tag', data);
	}

	static async getTagList(notebookId: string) {
		return axiosInstance.get(`/api/tag/list/${notebookId}`);
	}

	static async getTag(tagId: string) {
		return axiosInstance.get(`/api/tag/${tagId}`);
	}

	static async deleteTag(tagId: string) {
		return axiosInstance.delete(`/api/tag/${tagId}`);
	}
}

export default TagService;
