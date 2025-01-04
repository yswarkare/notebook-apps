import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TokenModule } from './token/token.module';
import { PrismaModule } from './prisma/prisma.module';
import { NotebookModule } from './notebook/notebook.module';
import { TagModule } from './tag/tag.module';
import { RefurlModule } from './refurl/refurl.module';
import { CliffNotesModule } from './cliff-notes/cliff-notes.module';
import { ArticlesModule } from './articles/articles.module';
import { SectionModule } from './section/section.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    TokenModule,
    PrismaModule,
    NotebookModule,
    TagModule,
    RefurlModule,
    CliffNotesModule,
    ArticlesModule,
    SectionModule,
    QuestionModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
