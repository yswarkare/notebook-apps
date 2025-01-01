import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { CurrentUserId } from '../auth/current-user-id.decorator';
import { TagsListDto } from '../dtos/tags-list.dto';
import { RefUrlsListDto } from '../dtos/ref-urls-list.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  create(
    @Body() createArticleDto: CreateArticleDto,
    @CurrentUserId() userId: string,
  ) {
    return this.articlesService.create(createArticleDto, userId);
  }

  @Get('/notebook/:notebookId')
  findAll(
    @Param('notebookId') notebookId: string,
    @CurrentUserId() userId: string,
  ) {
    return this.articlesService.findAll(notebookId, userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUserId() userId: string) {
    return this.articlesService.findOne(id, userId);
  }

  @Patch()
  update(
    @Body() updateArticleDto: UpdateArticleDto,
    @CurrentUserId() userId: string,
  ) {
    return this.articlesService.update(updateArticleDto, userId);
  }

  @Patch('/tags')
  async updateTags(
    @Body() tagsList: TagsListDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.articlesService.updateTags(tagsList, userId);
  }

  @Patch('/ref-urls')
  async updateRefUrls(
    @Body() refUrlsList: RefUrlsListDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.articlesService.updateTags(refUrlsList, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUserId() userId: string) {
    return this.articlesService.remove(id, userId);
  }
}
