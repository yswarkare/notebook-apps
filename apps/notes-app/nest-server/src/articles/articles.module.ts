import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { TagModule } from '../tag/tag.module';
import { RefurlModule } from '../refurl/refurl.module';
import { RefurlService } from '../refurl/refurl.service';
import { TagService } from '../tag/tag.service';

@Module({
  imports: [PrismaModule, TagModule, RefurlModule],
  controllers: [ArticlesController],
  providers: [ArticlesService, PrismaService, TagService, RefurlService],
})
export class ArticlesModule {}
