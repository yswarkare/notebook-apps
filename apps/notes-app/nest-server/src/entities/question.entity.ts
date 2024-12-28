import { ArticleEn } from './article.entity';
import { BaseEntity } from './base.entity';
import { RefUrlEn } from './refurl.entity';
import { TagEn } from './tag.entity';

export class QuestionEn extends BaseEntity {
  name: string;
  question: string;
  answer: string;
  articleId: string;
  article?: ArticleEn;
  tags?: Array<TagEn>;
  refUrls?: Array<RefUrlEn>;
}
