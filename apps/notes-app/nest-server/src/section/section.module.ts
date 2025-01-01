import { Module } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionController } from './section.controller';
import { TagModule } from '../tag/tag.module';
import { RefurlModule } from '../refurl/refurl.module';
import { PrismaModule } from '../prisma/prisma.module';
import { RefurlService } from '../refurl/refurl.service';
import { TagService } from '../tag/tag.service';

@Module({
  imports: [PrismaModule, TagModule, RefurlModule],
  controllers: [SectionController],
  providers: [SectionService, TagService, RefurlService],
})
export class SectionModule {}
