import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { CurrentUserId } from '../auth/current-user-id.decorator';
import { RefUrlsListDto } from '../dtos/ref-urls-list.dto';
import { JwtAuthGuard } from '../token/guards/jwt-auth.guard';
import { AddTagDto } from 'src/dtos/add-tag.dto';

@Controller('articles')
@UseGuards(JwtAuthGuard)
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async create(
    @Body() createArticleDto: CreateArticleDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.articlesService.create(createArticleDto, userId);
  }

  @Get('/list/:notebookId')
  async findAll(
    @Param('notebookId') notebookId: string,
    @CurrentUserId() userId: string,
  ) {
    return await this.articlesService.findAll(notebookId, userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUserId() userId: string) {
    return await this.articlesService.findOne(id, userId);
  }

  @Patch()
  async update(
    @Body() updateArticleDto: UpdateArticleDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.articlesService.update(updateArticleDto, userId);
  }

  @Get('/tags/:articleId')
  async getTags(
    @Param('articleId') articleId: string,
    @CurrentUserId() userId: string,
  ) {
    return await this.articlesService.findArticleTags(articleId, userId);
  }

  @Post('/tag')
  async createTag(
    @Body() addTagDto: AddTagDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.articlesService.createArticleTag(addTagDto, userId);
  }

  @Patch('/ref-urls')
  async updateRefUrls(
    @Body() refUrlsList: RefUrlsListDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.articlesService.updateRefUrls(refUrlsList, userId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUserId() userId: string) {
    return await this.articlesService.remove(id, userId);
  }
}
