import { SectionType, CreateSectionType2 } from '../models/section.model';
import { CreateTagFor } from '../models/tags.model';
import axiosInstance from './axios.defaults';

class SectionService {
	static async creteSection(data: CreateSectionType2) {
		return axiosInstance.post('/api/section', data);
	}

	static async updateSection(data: SectionType) {
		return axiosInstance.patch('/api/section', data);
	}

	static async getSectionList(articleId: string) {
		return axiosInstance.get(`/api/section/list/${articleId}`);
	}

	static async getSection(sectionId: string) {
		return axiosInstance.get(`/api/section/${sectionId}`);
	}

	static async getSectionTags(sectionId: string) {
		return axiosInstance.get(`/api/section/tags/${sectionId}`);
	}

	static async createSectionTags(data: CreateTagFor) {
		return axiosInstance.post(`/api/section/tag`, data);
	}

	static async deleteSection(sectionId: string) {
		return axiosInstance.delete(`/api/section/${sectionId}`);
	}
}

export default SectionService;
