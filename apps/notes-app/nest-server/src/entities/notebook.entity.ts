import { ArticleEn } from './article.entity';
import { BaseEntity } from './base.entity';
import { CliffNotesEn } from './cliffnote.entity';
import { RefUrlEn } from './refurl.entity';
import { TagEn } from './tag.entity';
import { UserEn } from './user.entity';

export class NotebookEn extends BaseEntity {
  name: string;
  userId: string;
  user?: UserEn;
  tags?: Array<TagEn>;
  refUrls?: Array<RefUrlEn>;
  articles?: Array<ArticleEn>;
  cliffNotes?: Array<CliffNotesEn>;
}
