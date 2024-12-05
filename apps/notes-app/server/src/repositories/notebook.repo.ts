import { and, eq } from 'drizzle-orm';
import db from '../db';
import { v4 as uuidV4 } from 'uuid';
import { NotebookEntity, notebooks } from '../db/schema/notebooks';
import { CreateNotebookType, NotebookType, UpdateNotebookType } from '../zod/schema/notebook.zod';

export const doesUserExists = async (notebook: NotebookType): Promise<boolean | undefined> => {
	try {
		const foundUser = await db
			.select()
			.from(notebooks)
			.where(and(eq(notebooks.title, notebook.title), eq(notebooks.userId, notebook.userId)));
		if (!foundUser[0]) {
			return false;
		}
		return true;
	} catch (error) {
		throw error;
	}
};

export const getNotebookById = async (notebookId: string, userId: string): Promise<NotebookEntity> => {
	try {
		const foundNotebook = await db
			.select()
			.from(notebooks)
			.where(and(eq(notebooks.id, notebookId), eq(notebooks.userId, userId)));
		return foundNotebook[0];
	} catch (error) {
		throw error;
	}
};

export const getNotebooksByUserId = async (userId: string): Promise<Array<NotebookEntity>> => {
	try {
		return await db.select().from(notebooks).where(eq(notebooks.userId, userId));
	} catch (error) {
		throw error;
	}
};

export const createNotebook = async (notebook: CreateNotebookType): Promise<NotebookEntity> => {
	try {
		const newNotebook: NotebookEntity = { ...notebook, id: uuidV4(), created_by: notebook.userId };
		await db.insert(notebooks).values(newNotebook);
		return newNotebook;
	} catch (error) {
		throw error;
	}
};

export const updateNotebookById = async (notebook: UpdateNotebookType, userId: string): Promise<NotebookEntity> => {
	try {
		const storedNotebook: NotebookEntity = await getNotebookById(notebook.id, userId);
		const updatedNotebook: NotebookEntity = { ...storedNotebook, title: notebook.title, updated_by: userId };
		await db
			.update(notebooks)
			.set(updatedNotebook)
			.where(and(eq(notebooks.id, notebook.id), eq(notebooks.userId, userId)));
		return updatedNotebook;
	} catch (error) {
		throw error;
	}
};

export const deleteNotebookById = async (notebookId: string, userId: string): Promise<NotebookEntity> => {
	try {
		const notebook = await db
			.delete(notebooks)
			.where(and(eq(notebooks.id, notebookId), eq(notebooks.userId, userId)))
			.returning({ id: notebooks.id, title: notebooks.title, userId: notebooks.userId, created_by: notebooks.created_by });
		return notebook[0];
	} catch (error) {
		throw error;
	}
};
