import { Module } from '@nestjs/common';
import { NotebookService } from './notebook.service';
import { NotebookController } from './notebook.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { TagModule } from '../tag/tag.module';
import { TagService } from '../tag/tag.service';
import { RefurlModule } from '../refurl/refurl.module';
import { RefurlService } from '../refurl/refurl.service';

@Module({
  imports: [PrismaModule, TagModule, RefurlModule],
  controllers: [NotebookController],
  providers: [NotebookService, PrismaService, TagService, RefurlService],
})
export class NotebookModule {}
