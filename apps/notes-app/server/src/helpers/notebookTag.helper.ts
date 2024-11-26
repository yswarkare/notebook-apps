import { and, eq } from 'drizzle-orm';
import db from '../db';
import { NotebookTagsEntity, tagsToNotebook } from '../db/schema/tagsToNotebook';
import { NotebookTagType } from '../zod/schema/tag.zod';

export const doesNotebookTagExists = async (notebookTag: NotebookTagType): Promise<boolean | undefined> => {
	try {
		const foundRecord = await db
			.select()
			.from(tagsToNotebook)
			.where(and(eq(tagsToNotebook.notebookId, notebookTag.notebookId), eq(tagsToNotebook.tagId, notebookTag.tagId)));
		if (!foundRecord[0]) {
			return false;
		}
		return true;
	} catch (error) {
		throw error;
	}
};

export const getNotebookTag = async (notebookTag: NotebookTagType): Promise<NotebookTagsEntity> => {
	try {
		const foundRecord = await db
			.select()
			.from(tagsToNotebook)
			.where(and(eq(tagsToNotebook.notebookId, notebookTag.notebookId), eq(tagsToNotebook.tagId, notebookTag.tagId)));
		return foundRecord[0];
	} catch (error) {
		throw error;
	}
};

export const getNotebookTagsByNotebookId = async (notebookId: string): Promise<Array<NotebookTagsEntity>> => {
	try {
		return await db.select().from(tagsToNotebook).where(eq(tagsToNotebook.notebookId, notebookId));
	} catch (error) {
		throw error;
	}
};

export const getNotebookTagsByTagId = async (tagId: string): Promise<Array<NotebookTagsEntity>> => {
	try {
		return await db.select().from(tagsToNotebook).where(eq(tagsToNotebook.tagId, tagId));
	} catch (error) {
		throw error;
	}
};

export const createNotebookTag = async (notebookTag: NotebookTagType): Promise<NotebookTagsEntity> => {
	try {
		const newNotebookTag: NotebookTagsEntity = { ...notebookTag };
		await db.insert(tagsToNotebook).values(newNotebookTag);
		return newNotebookTag;
	} catch (error) {
		throw error;
	}
};

export const updateNotebookTag = async (
	prevNotebookTag: NotebookTagType,
	nextNotebookTag: NotebookTagType
): Promise<NotebookTagsEntity> => {
	try {
		const storedNotebook: NotebookTagsEntity = await getNotebookTag(prevNotebookTag);
		const updatedNotebook: NotebookTagsEntity = {
			...storedNotebook,
			notebookId: nextNotebookTag.notebookId,
			tagId: nextNotebookTag.tagId,
		};
		await db
			.update(tagsToNotebook)
			.set(updatedNotebook)
			.where(and(eq(tagsToNotebook.notebookId, prevNotebookTag.notebookId), eq(tagsToNotebook.tagId, prevNotebookTag.tagId)));
		return updatedNotebook;
	} catch (error) {
		throw error;
	}
};

export const deleteNotebookTag = async (notebookTag: NotebookTagType): Promise<NotebookTagType> => {
	try {
		await db
			.delete(tagsToNotebook)
			.where(and(eq(tagsToNotebook.notebookId, notebookTag.notebookId), eq(tagsToNotebook.tagId, notebookTag.tagId)));
		return notebookTag;
	} catch (error) {
		throw error;
	}
};
