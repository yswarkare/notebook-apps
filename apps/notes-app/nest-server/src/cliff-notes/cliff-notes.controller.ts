import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CliffNotesService } from './cliff-notes.service';
import { CreateCliffNoteDto } from './dto/create-cliff-note.dto';
import { UpdateCliffNoteDto } from './dto/update-cliff-note.dto';
import { CurrentUserId } from '../auth/current-user-id.decorator';
import { CliffNoteTagsDto } from './dto/cliff-note-tags.dto';
import { CliffNoteRefUrlsDto } from './dto/cliff-note-refUrls.dto';

@Controller('cliff-notes')
export class CliffNotesController {
  constructor(private readonly cliffNotesService: CliffNotesService) {}

  @Post()
  create(
    @Body() createCliffNoteDto: CreateCliffNoteDto,
    @CurrentUserId() userId: string,
  ) {
    return this.cliffNotesService.create(createCliffNoteDto, userId);
  }

  @Get(':notebookId')
  findAll(
    @Param('notebookId') notebookId: string,
    @CurrentUserId() userId: string,
  ) {
    return this.cliffNotesService.findAll(notebookId, userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUserId() userId: string) {
    return this.cliffNotesService.findOne(id, userId);
  }

  @Patch()
  update(
    @Body() updateCliffNoteDto: UpdateCliffNoteDto,
    @CurrentUserId() userId: string,
  ) {
    return this.cliffNotesService.update(updateCliffNoteDto, userId);
  }

  @Patch('/tags')
  updateTags(
    @Body() cliffNoteTagsDto: CliffNoteTagsDto,
    @CurrentUserId() userId: string,
  ) {
    return this.cliffNotesService.updateTags(cliffNoteTagsDto, userId);
  }

  @Patch('/ref-urls')
  updateRefUrls(
    @Body() cliffNoteRefUrlsDto: CliffNoteRefUrlsDto,
    @CurrentUserId() userId: string,
  ) {
    return this.cliffNotesService.updateRefUrls(cliffNoteRefUrlsDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUserId() userId: string) {
    return this.cliffNotesService.remove(id, userId);
  }
}
