import { TagEntity } from '../schema/tags';
import { NotebookTagsEntity } from '../schema/tagsToNotebook';

export type NotebookTagsNTags = { tags: TagEntity | null; tags_to_notebook: NotebookTagsEntity | null };
