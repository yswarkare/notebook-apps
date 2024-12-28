import { ArticleEn } from './article.entity';
import { BaseEntity } from './base.entity';
import { CliffNotesEn } from './cliffnote.entity';
import { NotebookEn } from './notebook.entity';
import { QuestionEn } from './question.entity';
import { SectionEn } from './section.entity';

export class TagEn extends BaseEntity {
  name: string;
  notebooks?: Array<NotebookEn>;
  articleTags?: Array<ArticleEn>;
  cliffNotes?: Array<CliffNotesEn>;
  sections?: Array<SectionEn>;
  questions?: Array<QuestionEn>;
}
