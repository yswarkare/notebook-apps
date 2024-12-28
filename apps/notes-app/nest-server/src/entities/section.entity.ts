import { ArticleEn } from './article.entity';
import { BaseEntity } from './base.entity';
import { ImageEn } from './image.entity';
import { RefUrlEn } from './refurl.entity';
import { TagEn } from './tag.entity';

export class SectionEn extends BaseEntity {
  name: string;
  content: string;
  articleId: string;
  article?: ArticleEn;
  tags?: Array<TagEn>;
  refUrls?: Array<RefUrlEn>;
  images?: Array<ImageEn>;
}
