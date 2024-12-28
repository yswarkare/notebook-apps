import { CliffNotes } from '@prisma/client';
import { ArticleEn } from './article.entity';
import { BaseEntity } from './base.entity';
import { NotebookEn } from './notebook.entity';
import { QuestionEn } from './question.entity';
import { SectionEn } from './section.entity';

export class RefUrlEn extends BaseEntity {
  url: string;
  type: 'url' | 'video' | 'article' | 'image';
  notebooks?: Array<NotebookEn>;
  sections?: Array<SectionEn>;
  articles?: Array<ArticleEn>;
  cliffNotes?: Array<CliffNotes>;
  questions?: Array<QuestionEn>;
}
