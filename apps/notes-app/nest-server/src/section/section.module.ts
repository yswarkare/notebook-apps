import { Module } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionController } from './section.controller';
import { TagModule } from '../tag/tag.module';
import { RefurlModule } from '../refurl/refurl.module';
import { PrismaModule } from '../prisma/prisma.module';
import { RefurlService } from '../refurl/refurl.service';
import { TagService } from '../tag/tag.service';
import { JwtStrategy } from '../token/strategies/jwt.strategy';
import { UserService } from '../user/user.service';

@Module({
  imports: [PrismaModule, TagModule, RefurlModule],
  controllers: [SectionController],
  providers: [
    SectionService,
    TagService,
    RefurlService,
    JwtStrategy,
    UserService,
  ],
})
export class SectionModule {}
