import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { CurrentUserId } from '../auth/current-user-id.decorator';
import { TagsListDto } from '../dtos/tags-list.dto';
import { RefUrlsListDto } from '../dtos/ref-urls-list.dto';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  async create(
    @Body() createQuestionDto: CreateQuestionDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.questionService.create(createQuestionDto, userId);
  }

  @Get('/article/:articleId')
  async findAll(
    @Param('articleId') articleId: string,
    @CurrentUserId() userId: string,
  ) {
    return await this.questionService.findAll(articleId, userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUserId() userId: string) {
    return await this.questionService.findOne(id, userId);
  }

  @Patch()
  async update(
    @Body() updateQuestionDto: UpdateQuestionDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.questionService.update(updateQuestionDto, userId);
  }

  @Patch('/tags')
  async updateTags(
    @Body() tagsList: TagsListDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.questionService.updateTags(tagsList, userId);
  }

  @Patch('/ref-urls')
  async updateRefUrls(
    @Body() refUrlsList: RefUrlsListDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.questionService.updateRefUrls(refUrlsList, userId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUserId() userId: string) {
    return await this.questionService.remove(id, userId);
  }
}
