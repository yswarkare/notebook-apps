import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from '../prisma/prisma.service';
import { TagService } from '../tag/tag.service';
import { RefurlService } from '../refurl/refurl.service';
import { RefUrlsListDto } from '../dtos/ref-urls-list.dto';
import { TagsListDto } from '../dtos/tags-list.dto';

@Injectable()
export class QuestionService {
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

  async create(createQuestionDto: CreateQuestionDto, userId: string) {
    const orderId = await this.getNewOrderId(
      createQuestionDto.articleId,
      userId,
    );
    return this.prisma.question.create({
      data: {
        name: createQuestionDto.name,
        answer: createQuestionDto.answer,
        question: createQuestionDto.question,
        articleId: createQuestionDto.articleId,
        orderId,
        createdBy: userId,
        updatedBy: userId,
      },
    });
  }

  async findAll(articleId: string, userId: string) {
    return await this.prisma.question.findMany({
      where: { articleId, createdBy: userId },
    });
  }

  async findOne(id: string, userId: string) {
    return await this.prisma.question.findUnique({
      where: { id, createdBy: userId },
    });
  }

  async update(updateQuestionDto: UpdateQuestionDto, userId: string) {
    return await this.prisma.question.update({
      where: {
        id: updateQuestionDto.id,
        createdBy: userId,
      },
      data: {
        name: updateQuestionDto.name,
        answer: updateQuestionDto.answer,
        question: updateQuestionDto.question,
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
    return await this.prisma.question.delete({
      where: { id, createdBy: userId },
    });
  }
}
