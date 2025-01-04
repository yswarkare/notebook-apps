import { Module } from '@nestjs/common';
import { CliffNotesService } from './cliff-notes.service';
import { CliffNotesController } from './cliff-notes.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { TagService } from '../tag/tag.service';
import { RefurlService } from '../refurl/refurl.service';
import { RefurlModule } from '../refurl/refurl.module';
import { TagModule } from '../tag/tag.module';
import { JwtStrategy } from '../token/strategies/jwt.strategy';
import { UserService } from '../user/user.service';

@Module({
  imports: [PrismaModule, RefurlModule, TagModule],
  controllers: [CliffNotesController],
  providers: [
    CliffNotesService,
    PrismaService,
    RefurlService,
    TagService,
    JwtStrategy,
    UserService,
  ],
})
export class CliffNotesModule {}
