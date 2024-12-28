import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { CurrentUserId } from 'src/auth/current-user-id.decorator';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  create(@Body() createTagDto: CreateTagDto, @CurrentUserId() userId: string) {
    return this.tagService.create(createTagDto, userId);
  }

  @Get()
  findAll() {
    return this.tagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUserId() userId: string) {
    return this.tagService.findOne(id, userId);
  }

  @Patch()
  update(@Body() updateTagDto: UpdateTagDto, @CurrentUserId() userId: string) {
    return this.tagService.update(updateTagDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUserId() userId: string) {
    return this.tagService.remove(id, userId);
  }
}
