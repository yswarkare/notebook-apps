import { BaseEntity } from './base.entity';
import { SectionEn } from './section.entity';

export class ImageEn extends BaseEntity {
  url: string;
  type: 'url' | 'image';
  sections?: Array<SectionEn>;
}
