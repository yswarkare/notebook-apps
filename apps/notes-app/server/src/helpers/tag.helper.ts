import { and, eq } from 'drizzle-orm';
import db from '../db';
import { v4 as uuidV4 } from 'uuid';
import { NotebookEntity, notebooks } from '../db/schema/notebooks';
import { NotebookType } from '../zod/schema/notebook.zod';
import { NotebookTagsEntity, tagsToNotebook } from '../db/schema/tagsToNotebook';
import { NotebookTagType, TagType } from '../zod/schema/tag.zod';
import { TagEntity, tags } from '../db/schema/tags';

export const doesTagExists = async (tag: TagType): Promise<boolean | undefined> => {
	try {
		const foundTag = await db
			.select()
			.from(tags)
			.where(and(eq(tags.name, tag.name), eq(tags.userId, tag.userId)));
		if (!foundTag[0]) {
			return false;
		}
		return true;
	} catch (error) {
		throw error;
	}
};

export const getTagById = async (tagId: string): Promise<TagEntity> => {
	try {
		const foundRecord = await db.select().from(tags).where(eq(tags.id, tagId));
		return foundRecord[0];
	} catch (error) {
		throw error;
	}
};

export const getTagsByUserId = async (userId: string): Promise<Array<TagEntity>> => {
	try {
		return await db.select().from(tags).where(eq(tags.userId, userId));
	} catch (error) {
		throw error;
	}
};

export const createTag = async (tag: TagType): Promise<TagEntity> => {
	try {
		const newTag: TagEntity = { ...tag, id: uuidV4(), created_by: tag.userId };
		await db.insert(tags).values(newTag);
		return newTag;
	} catch (error) {
		throw error;
	}
};

export const updateTagById = async (tag: TagType): Promise<TagEntity> => {
	try {
		const storedTag: TagEntity = await getTagById(tag.id);
		const updatedTag: TagEntity = { ...storedTag, name: tag.name, updated_by: tag.userId };
		await db.update(tags).set(updatedTag).where(eq(tags.id, tag.id));
		return updatedTag;
	} catch (error) {
		throw error;
	}
};

export const deleteTagById = async (tag: TagType): Promise<TagType> => {
	try {
		await db.delete(tags).where(eq(tags.id, tag.id));
		return tag;
	} catch (error) {
		throw error;
	}
};
