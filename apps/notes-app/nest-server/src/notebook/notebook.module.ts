import { Module } from '@nestjs/common';
import { NotebookService } from './notebook.service';
import { NotebookController } from './notebook.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { TagModule } from '../tag/tag.module';
import { TagService } from '../tag/tag.service';

@Module({
  controllers: [NotebookController, PrismaModule, TagModule],
  providers: [NotebookService, PrismaService, TagService],
})
export class NotebookModule {}
