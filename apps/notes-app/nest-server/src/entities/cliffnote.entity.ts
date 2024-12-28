import { BaseEntity } from './base.entity';
import { NotebookEn } from './notebook.entity';
import { RefUrlEn } from './refurl.entity';
import { TagEn } from './tag.entity';

export class CliffNotesEn extends BaseEntity {
  name: string;
  content: string;
  notebookId: string;
  notebook?: Array<NotebookEn>;
  tags?: Array<TagEn>;
  refUrls?: Array<RefUrlEn>;
}
