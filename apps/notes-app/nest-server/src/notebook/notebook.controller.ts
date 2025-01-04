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
import { NotebookService } from './notebook.service';
import { CreateNotebookDto } from './dto/create-notebook.dto';
import { UpdateNotebookDto } from './dto/update-notebook.dto';
import { CurrentUserId } from 'src/auth/current-user-id.decorator';
import { TagsListDto } from '../dtos/tags-list.dto';
import { RefUrlsListDto } from '../dtos/ref-urls-list.dto';
import { JwtAuthGuard } from '../token/guards/jwt-auth.guard';
import { AddTagDto } from '../dtos/add-tag.dto';

@Controller('notebook')
@UseGuards(JwtAuthGuard)
export class NotebookController {
  constructor(private readonly notebookService: NotebookService) {}

  @Post()
  async create(
    @Body() createNotebookDto: CreateNotebookDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.notebookService.create(createNotebookDto, userId);
  }

  @Get('/list')
  async findAll(@CurrentUserId() userId: string) {
    return await this.notebookService.findByUserId(userId);
  }

  @Get('/tags/:notebookId')
  async findNotebookTags(
    @Param('notebookId') notebookId: string,
    @CurrentUserId() userId: string,
  ) {
    return await this.notebookService.findNotebookTags(notebookId, userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUserId() userId: string) {
    return await this.notebookService.findOne(id, userId);
  }

  @Patch()
  async update(
    @Body() updateNotebookDto: UpdateNotebookDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.notebookService.update(updateNotebookDto, userId);
  }

  @Patch('/tag')
  async addNotebookTag(
    @Body() addTagDto: AddTagDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.notebookService.addNotebookTag(addTagDto, userId);
  }

  @Patch('/tags')
  async updateTags(
    @Body() tagsList: TagsListDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.notebookService.updateTags(tagsList, userId);
  }

  @Patch('/ref-urls')
  async updateRefUrls(
    @Body() refUrlsList: RefUrlsListDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.notebookService.updateRefUrls(refUrlsList, userId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUserId() userId: string) {
    return await this.notebookService.remove(id, userId);
  }
}
