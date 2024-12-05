import { NotebookTagsNTags } from '../db/JoinedEntities/NotebookTagsNTags';
import { TagEntity } from '../db/schema/tags';

export type TagDto = {
	id: string;
	name: string;
};

export const convertTagList = (list: Array<TagEntity>): Array<TagDto> => {
	return list.map((el) => ({ id: el.id, name: el.name }));
};


export const convertNotebookTagList = (list: Array<NotebookTagsNTags>): Array<TagDto> => {
	const result:Array<TagDto> = []
	for (const el of list) {
		if (el?.tags) {
			result.push({ id: el.tags.id, name: el.tags.name })
		}
	}
	return result
};
