import { and, eq } from 'drizzle-orm';
import db from '../db';
import { v4 as uuidV4 } from 'uuid';
import { CreateTagType, TagType, UpdateTagType } from '../zod/schema/tag.zod';
import { TagEntity, tags } from '../db/schema/tags';
import { tagsToNotebook } from '../db/schema/tagsToNotebook';
import { NotebookTagsNTags } from '../db/JoinedEntities/NotebookTagsNTags';
import { createNotebookTag } from './notebookTag.repo';
import { NotebookTagType } from '../zod/schema/notebookTags.zod';

export const doesTagExists = async (tag: TagType): Promise<boolean | undefined> => {
	try {
		const foundTag = await db
			.select()
			.from(tags)
			.where(and(eq(tags.name, tag.name), eq(tags.created_by, tag.userId)));
		if (!foundTag[0]) {
			return false;
		}
		return true;
	} catch (error) {
		throw error;
	}
};

export const getTagById = async (tagId: string, userId: string): Promise<TagEntity> => {
	try {
		const foundRecord = await db
			.select()
			.from(tags)
			.where(and(eq(tags.id, tagId), eq(tags.created_by, userId)));
		return foundRecord[0];
	} catch (error) {
		throw error;
	}
};

export const getTagsByUserId = async (userId: string): Promise<Array<TagEntity>> => {
	try {
		return await db.select().from(tags).where(eq(tags.created_by, userId));
	} catch (error) {
		throw error;
	}
};

export const getNotebookTags = async (notebookId: string, userId: string): Promise<Array<NotebookTagsNTags>> => {
	try {
		return await db
			.select()
			.from(tags)
			.leftJoin(
				tagsToNotebook,
				and(eq(tagsToNotebook.tagId, tags.id), eq(tagsToNotebook.notebookId, notebookId), eq(tags.created_by, userId))
			);
	} catch (error) {
		throw error;
	}
};

export const createTag = async (tag: CreateTagType): Promise<TagEntity> => {
	try {
		const newTag: TagEntity = { id: uuidV4(), name: tag.name, created_by: tag.userId };
		await db.insert(tags).values(newTag);
		const notebookTag: NotebookTagType = { tagId: newTag.id, notebookId: tag.notebookId };
		await createNotebookTag(notebookTag);
		return newTag;
	} catch (error) {
		throw error;
	}
};

export const updateTagById = async (tag: UpdateTagType, userId: string): Promise<TagEntity> => {
	try {
		const storedTag: TagEntity = await getTagById(tag.id, userId);
		const updatedTag: TagEntity = { ...storedTag, name: tag.name, updated_by: userId };
		await db
			.update(tags)
			.set(updatedTag)
			.where(and(eq(tags.id, tag.id), eq(tags.created_by, userId)));
		return updatedTag;
	} catch (error) {
		throw error;
	}
};

export const deleteTagById = async (tagId: string, userId: string): Promise<string> => {
	try {
		await db.delete(tags).where(and(eq(tags.id, tagId), eq(tags.created_by, userId)));
		return tagId;
	} catch (error) {
		throw error;
	}
};
