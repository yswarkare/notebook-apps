import { Request, Response } from 'express';
import { CreateTagType, TagType, UpdateTagType, validateCreateTag, validateUpdateTag } from '../zod/schema/tag.zod';
import { createTag, deleteTagById, getNotebookTags, getTagById, getTagsByUserId, updateTagById } from '../repositories/tag.repo';
import { convertNotebookTagList, convertTagList } from '../dto/Tag.dto';

export const getATag = async (req: Request<{ tagId: string }, any, any, any>, res: Response) => {
	try {
		if (req.user?.id) {
			const tagId = req.params.tagId;
			const tag = await getTagById(tagId, req.user?.id);
			res.status(200).json({ success: true, message: 'found tag', data: tag });
		} else res.status(403).json({ success: false, message: 'failed to get user id' });
	} catch (error) {
		res.status(403).json({ success: false, message: 'failed to get tag', error });
	}
};

export const getANotebookTags = async (req: Request<{ notebookId: string }, any, any, any>, res: Response) => {
	try {
		if (req.user?.id) {
			const notebookId = req.params.notebookId;
			const tag = await getNotebookTags(notebookId, req.user?.id);
			const tagList = convertNotebookTagList(tag);
			res.status(200).json({ success: true, message: 'found tag', data: tagList });
		} else res.status(403).json({ success: false, message: 'failed to get user id' });
	} catch (error) {
		res.status(403).json({ success: false, message: 'failed to get tag', error });
	}
};

export const getUserTags = async (req: Request, res: Response) => {
	try {
		if (req.user?.id) {
			const savedTag = await getTagsByUserId(req.user.id);
			const tagList = convertTagList(savedTag);
			res.status(200).json({ success: true, message: 'found tag list', data: tagList });
		} else res.status(403).json({ success: false, message: 'failed to get user id' });
	} catch (error) {
		res.status(403).json({ success: false, message: 'failed to get tag list', error });
	}
};

export const createNewTag = async (req: Request<any, any, CreateTagType, any>, res: Response) => {
	try {
		const tagData: CreateTagType = req.body;
		if (req.user?.id) {
			tagData.userId = req.user.id;
			const tag = validateCreateTag(tagData);
			const savedTag = await createTag(tag);
			res.status(200).json({ success: true, message: 'created new tag', data: savedTag });
		} else res.status(403).json({ success: false, message: 'failed to get user id' });
	} catch (error) {
		res.status(403).json({ success: false, message: 'failed to create tag', error });
	}
};

export const updateUserTag = async (req: Request<any, any, TagType, any>, res: Response) => {
	try {
		const tagData: UpdateTagType = req.body;
		if (req.user?.id) {
			const tag = validateUpdateTag(tagData);
			const savedTag = await updateTagById(tag, req.user.id);
			res.status(200).json({ success: true, message: 'updated tag', data: savedTag });
		} else res.status(403).json({ success: false, message: 'failed to get user id' });
	} catch (error) {
		res.status(403).json({ success: false, message: 'failed to update tag', error });
	}
};

export const deleteTag = async (req: Request<{ tagId: string }, any, any, any>, res: Response) => {
	try {
		const tagId = req.params.tagId;
		if (req.user?.id) {
			const deletedTag = await deleteTagById(tagId, req.user.id);
			res.status(200).json({ success: true, message: 'deleted tag', data: deletedTag });
		} else res.status(403).json({ success: false, message: 'failed to get user id' });
	} catch (error) {
		res.status(403).json({ success: false, message: 'failed to delete tag', error });
	}
};
