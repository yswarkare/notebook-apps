import { Injectable } from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { PrismaService } from '../prisma/prisma.service';
import { TagService } from '../tag/tag.service';
import { RefurlService } from '../refurl/refurl.service';
import { RefUrlsListDto } from '../dtos/ref-urls-list.dto';
import { TagsListDto } from '../dtos/tags-list.dto';

@Injectable()
export class SectionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tagService: TagService,
    private readonly refurlService: RefurlService,
  ) {}

  private async getNewOrderId(articleId: string, userId: string) {
    const prevOrderId = await this.prisma.section.aggregate({
      where: { articleId, createdBy: userId },
      _max: { orderId: true },
    });
    if (!prevOrderId._max.orderId) return 1;
    return prevOrderId._max.orderId + 1;
  }

  async create(createSectionDto: CreateSectionDto, userId: string) {
    const orderId = await this.getNewOrderId(
      createSectionDto.articleId,
      userId,
    );
    return await this.prisma.section.create({
      data: {
        name: createSectionDto.name,
        articleId: createSectionDto.articleId,
        content: createSectionDto.content,
        orderId,
        createdBy: userId,
        updatedBy: userId,
      },
    });
  }

  async findAll(articleId: string, userId: string) {
    return await this.prisma.section.findMany({
      where: { articleId, createdBy: userId },
    });
  }

  async findArticleSections(articleId: string, userId: string) {
    return await this.prisma.section.findMany({
      where: { articleId, createdBy: userId },
      select: { id: true, name: true },
    });
  }

  async findOne(id: string, userId: string) {
    return await this.prisma.section.findUnique({
      where: { id, createdBy: userId },
      select: {
        id: true,
        name: true,
        orderId: true,
        content: true,
        tags: true,
        refUrls: true,
      },
    });
  }

  async update(updateSectionDto: UpdateSectionDto, userId: string) {
    return await this.prisma.section.update({
      where: { id: updateSectionDto.id, createdBy: userId },
      data: {
        name: updateSectionDto.name,
        orderId: updateSectionDto.orderId,
        content: updateSectionDto.content,
        updatedBy: userId,
      },
    });
  }

  async updateTags(tagsListDto: TagsListDto, userId: string) {
    if (tagsListDto.tags.length > 0 && tagsListDto.tags.length < 30) {
      const tagsList = await this.tagService.createTags(
        tagsListDto.tags,
        userId,
      );
      return await this.prisma.section.update({
        where: {
          id: tagsListDto.id,
          createdBy: userId,
        },
        data: {
          tags: {
            updateMany: {
              where: {
                createdBy: userId,
              },
              data: tagsList,
            },
          },
        },
      });
    }
  }

  async updateRefUrls(refUrlsDto: RefUrlsListDto, userId: string) {
    if (refUrlsDto.refUrls.length > 0 && refUrlsDto.refUrls.length < 30) {
      const refUrlsList = await this.refurlService.createRefUrls(
        refUrlsDto.refUrls,
        userId,
      );
      return await this.prisma.section.update({
        where: {
          id: refUrlsDto.id,
          createdBy: userId,
        },
        data: {
          refUrls: {
            updateMany: {
              where: {
                createdBy: userId,
              },
              data: refUrlsList,
            },
          },
        },
      });
    }
  }

  async remove(id: string, userId: string) {
    return await this.prisma.section.delete({
      where: { id, createdBy: userId },
    });
  }
}
