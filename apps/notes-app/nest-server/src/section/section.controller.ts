import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SectionService } from './section.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { CurrentUserId } from '../auth/current-user-id.decorator';
import { TagsListDto } from '../dtos/tags-list.dto';
import { RefUrlsListDto } from 'src/dtos/ref-urls-list.dto';

@Controller('section')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post()
  async create(
    @Body() createSectionDto: CreateSectionDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.sectionService.create(createSectionDto, userId);
  }

  @Get('/article/:articleId')
  async findAll(
    @Param('articleId') articleId: string,
    @CurrentUserId() userId: string,
  ) {
    return await this.sectionService.findAll(articleId, userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUserId() userId: string) {
    return await this.sectionService.findOne(id, userId);
  }

  @Patch(':id')
  async update(
    @Body() updateSectionDto: UpdateSectionDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.sectionService.update(updateSectionDto, userId);
  }

  @Patch('/tags')
  async updateTags(
    @Body() tagsList: TagsListDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.sectionService.updateTags(tagsList, userId);
  }

  @Patch('/ref-urls')
  async updateRefUrls(
    @Body() refUrlsList: RefUrlsListDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.sectionService.updateRefUrls(refUrlsList, userId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUserId() userId: string) {
    return await this.sectionService.remove(id, userId);
  }
}
