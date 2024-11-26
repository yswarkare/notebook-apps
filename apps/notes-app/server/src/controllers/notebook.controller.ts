import { Request, Response } from 'express';
import { CreateNotebookType, NotebookType, validateCreateNotebook, validateNotebook } from '../zod/schema/notebook.zod';
import { createNotebook, deleteNotebookById, getNotebookById, updateNotebookById } from '../helpers/notebook.helper';

export const getANotebook = async (req: Request<{ notebookId: string }, any, any, any>, res: Response) => {
	try {
		const notebookId = req.params.notebookId;
		const notebook = getNotebookById(notebookId);
		res.status(200).json({ success: true, message: 'found notebook', notebook });
	} catch (error) {
		res.status(403).json({ success: false, message: 'failed to get notebook', error });
	}
};

export const getUserNotebooks = async (req: Request, res: Response) => {
	try {
		const notebookData: NotebookType = req.body;
		notebookData.userId = req.user?.id;
		const notebook = validateNotebook(notebookData);
		const savedNotebook = await createNotebook(notebook);
		res.status(200).json({ success: true, message: 'created new notebook', notebook: savedNotebook });
	} catch (error) {
		res.status(403).json({ success: false, message: 'failed to create notebook', error });
	}
};

export const createNewNotebook = async (req: Request<any, any, CreateNotebookType, any>, res: Response) => {
	try {
		const notebookData: CreateNotebookType = req.body;
		notebookData.userId = req.user?.id;
		const notebook = validateCreateNotebook(notebookData);
		const savedNotebook = await createNotebook(notebook);
		res.status(200).json({ success: true, message: 'created new notebook', notebook: savedNotebook });
	} catch (error) {
		res.status(403).json({ success: false, message: 'failed to create notebook', error });
	}
};

export const updateUserNotebook = async (req: Request, res: Response) => {
	try {
		const notebookData: NotebookType = req.body;
		notebookData.userId = req.user?.id;
		const notebook = validateNotebook(notebookData);
		const savedNotebook = await updateNotebookById(notebook);
		res.status(200).json({ success: true, message: 'updated notebook', notebook: savedNotebook });
	} catch (error) {
		res.status(403).json({ success: false, message: 'failed to update notebook', error });
	}
};

export const deleteNotebook = async (req: Request, res: Response) => {
	try {
		const notebookData: NotebookType = req.body;
		notebookData.userId = req.user?.id;
		const notebook = validateNotebook(notebookData);
		const savedNotebook = await deleteNotebookById(notebook);
		res.status(200).json({ success: true, message: 'deleted notebook', notebook: savedNotebook });
	} catch (error) {
		res.status(403).json({ success: false, message: 'failed to delete notebook', error });
	}
};
