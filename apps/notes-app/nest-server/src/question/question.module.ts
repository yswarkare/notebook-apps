import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TagService } from '../tag/tag.service';
import { RefurlService } from '../refurl/refurl.service';
import { TagModule } from '../tag/tag.module';
import { RefurlModule } from '../refurl/refurl.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule, TagModule, RefurlModule],
  controllers: [QuestionController],
  providers: [QuestionService, TagService, RefurlService],
})
export class QuestionModule {}
