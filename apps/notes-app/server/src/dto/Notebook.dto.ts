import { NotebookEntity } from '../db/schema/notebooks';

export type NotebookDto = {
	id: string;
	title: string;
};

export const convertNotebookList = (list: Array<NotebookEntity>): Array<NotebookDto> => {
	return list.map((el) => ({ id: el.id, title: el.title }));
};
