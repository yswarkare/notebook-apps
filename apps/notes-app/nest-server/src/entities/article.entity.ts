import { BaseEntity } from './base.entity';
import { NotebookEn } from './notebook.entity';
import { QuestionEn } from './question.entity';
import { RefUrlEn } from './refurl.entity';
import { SectionEn } from './section.entity';
import { TagEn } from './tag.entity';

export class ArticleEn extends BaseEntity {
  name: string;
  notebookId: string;
  notebook: Array<NotebookEn>;
  tags?: Array<TagEn>;
  Section?: Array<SectionEn>;
  refUrls?: Array<RefUrlEn>;
  questions?: Array<QuestionEn>;
}
