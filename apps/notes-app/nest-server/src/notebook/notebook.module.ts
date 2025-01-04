import { Module } from '@nestjs/common';
import { NotebookService } from './notebook.service';
import { NotebookController } from './notebook.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { TagModule } from '../tag/tag.module';
import { TagService } from '../tag/tag.service';
import { RefurlModule } from '../refurl/refurl.module';
import { RefurlService } from '../refurl/refurl.service';
import { JwtStrategy } from '../token/strategies/jwt.strategy';
import { UserService } from '../user/user.service';

@Module({
  imports: [PrismaModule, TagModule, RefurlModule],
  controllers: [NotebookController],
  providers: [
    NotebookService,
    PrismaService,
    TagService,
    RefurlService,
    JwtStrategy,
    UserService,
  ],
})
export class NotebookModule {}
