import { Module } from '@nestjs/common';
import { RefurlService } from './refurl.service';
import { RefurlController } from './refurl.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [RefurlController, PrismaModule],
  providers: [RefurlService, PrismaService],
})
export class RefurlModule {}
