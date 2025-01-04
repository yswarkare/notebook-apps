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
import { CliffNotesService } from './cliff-notes.service';
import { CreateCliffNoteDto } from './dto/create-cliff-note.dto';
import { UpdateCliffNoteDto } from './dto/update-cliff-note.dto';
import { CurrentUserId } from '../auth/current-user-id.decorator';
import { TagsListDto } from '../dtos/tags-list.dto';
import { RefUrlsListDto } from '../dtos/ref-urls-list.dto';
import { JwtAuthGuard } from '../token/guards/jwt-auth.guard';

@Controller('cliff-notes')
@UseGuards(JwtAuthGuard)
export class CliffNotesController {
  constructor(private readonly cliffNotesService: CliffNotesService) {}

  @Post()
  async create(
    @Body() createCliffNoteDto: CreateCliffNoteDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.cliffNotesService.create(createCliffNoteDto, userId);
  }

  @Get('/notebook/:notebookId')
  async findAll(
    @Param('notebookId') notebookId: string,
    @CurrentUserId() userId: string,
  ) {
    return await this.cliffNotesService.findAll(notebookId, userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUserId() userId: string) {
    return await this.cliffNotesService.findOne(id, userId);
  }

  @Patch()
  async update(
    @Body() updateCliffNoteDto: UpdateCliffNoteDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.cliffNotesService.update(updateCliffNoteDto, userId);
  }

  @Patch('/tags')
  async updateTags(
    @Body() tagsList: TagsListDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.cliffNotesService.updateTags(tagsList, userId);
  }

  @Patch('/ref-urls')
  async updateRefUrls(
    @Body() refUrlsList: RefUrlsListDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.cliffNotesService.updateRefUrls(refUrlsList, userId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUserId() userId: string) {
    return await this.cliffNotesService.remove(id, userId);
  }
}
