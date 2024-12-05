import { Request, Response } from 'express';
import { CreateNotebookType, NotebookType, UpdateNotebookType, validateCreateNotebook, validateUpdateNotebook } from '../zod/schema/notebook.zod';
import {
	createNotebook,
	deleteNotebookById,
	getNotebookById,
	getNotebooksByUserId,
	updateNotebookById,
} from '../repositories/notebook.repo';
import { convertNotebookList } from '../dto/Notebook.dto';

export const getANotebook = async (req: Request<{ notebookId: string }, any, any, any>, res: Response) => {
	try {
		if (req.user?.id) {
			const notebookId = req.params.notebookId;
			const notebook = await getNotebookById(notebookId, req.user?.id);
			res.status(200).json({ success: true, message: 'found notebook', data: notebook });
		} else res.status(403).json({ success: false, message: 'failed to get user id' });
	} catch (error) {
		res.status(403).json({ success: false, message: 'failed to get notebook', error });
	}
};

export const getUserNotebooks = async (req: Request, res: Response) => {
	try {
		console.log({ user: req.user });
		if (req.user?.id) {
			const savedNotebook = await getNotebooksByUserId(req.user.id);
			const notebookList = convertNotebookList(savedNotebook);
			res.status(200).json({ success: true, message: 'found notebook list', data: notebookList });
		} else res.status(403).json({ success: false, message: 'failed to get user id' });
	} catch (error) {
		res.status(403).json({ success: false, message: 'failed to get notebook list', error });
	}
};

export const createNewNotebook = async (req: Request<any, any, CreateNotebookType, any>, res: Response) => {
	try {
		const notebookData: CreateNotebookType = req.body;
		if (req.user?.id) {
			notebookData.userId = req.user.id;
			const notebook = validateCreateNotebook(notebookData);
			const savedNotebook = await createNotebook(notebook);
			res.status(200).json({ success: true, message: 'created new notebook', data: savedNotebook });
		} else res.status(403).json({ success: false, message: 'failed to get user id' });
	} catch (error) {
		res.status(403).json({ success: false, message: 'failed to create notebook', error });
	}
};

export const updateUserNotebook = async (req: Request<any, any, NotebookType, any>, res: Response) => {
	try {
		const notebookData: UpdateNotebookType = req.body;
		if (req.user?.id) {
			const notebook = validateUpdateNotebook(notebookData);
			const savedNotebook = await updateNotebookById(notebook, req.user.id);
			res.status(200).json({ success: true, message: 'updated notebook', data: savedNotebook });
		} else res.status(403).json({ success: false, message: 'failed to get user id' });
	} catch (error) {
		res.status(403).json({ success: false, message: 'failed to update notebook', error });
	}
};

export const deleteNotebook = async (req: Request<{ notebookId: string }, any, any, any>, res: Response) => {
	try {
		const notebookId = req.params.notebookId;
		console.log({ params: notebookId });
		if (req.user?.id) {
			const deletedNotebook = await deleteNotebookById(notebookId, req.user.id);
			res.status(200).json({ success: true, message: 'deleted notebook', data: deletedNotebook });
		} else res.status(403).json({ success: false, message: 'failed to get user id' });
	} catch (error) {
		res.status(403).json({ success: false, message: 'failed to delete notebook', error });
	}
};
