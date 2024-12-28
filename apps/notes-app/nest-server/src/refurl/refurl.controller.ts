import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RefurlService } from './refurl.service';
import { CreateRefurlDto } from './dto/create-refurl.dto';
import { UpdateRefurlDto } from './dto/update-refurl.dto';
import { CurrentUserId } from '../auth/current-user-id.decorator';

@Controller('refurl')
export class RefurlController {
  constructor(private readonly refurlService: RefurlService) {}

  @Post()
  async create(
    @Body() createRefurlDto: CreateRefurlDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.refurlService.create(createRefurlDto, userId);
  }

  @Get()
  findAll() {
    return this.refurlService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUserId() userId: string) {
    return await this.refurlService.findOne(id, userId);
  }

  @Patch(':id')
  async update(
    @Body() updateRefurlDto: UpdateRefurlDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.refurlService.update(updateRefurlDto, userId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUserId() userId: string) {
    return await this.refurlService.remove(id, userId);
  }
}
