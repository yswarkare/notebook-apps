import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from '../prisma/prisma.service';
import { TagService } from '../tag/tag.service';
import { RefurlService } from '../refurl/refurl.service';
import { ArticleRefUrlsDto } from './dto/article-refUrls.dto';
import { ArticleTagsDto } from './dto/article-tags.dto';

@Injectable()
export class ArticlesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tagService: TagService,
    private readonly refurlService: RefurlService,
  ) {}

  private async getNewOrderId(notebookId: string, userId: string) {
    const prevOrderId = await this.prisma.article.aggregate({
      where: {
        notebookId: notebookId,
        createdBy: userId,
      },
      _max: {
        orderId: true,
      },
    });
    if (!prevOrderId._max.orderId) return 1;
    return prevOrderId._max.orderId + 1;
  }

  async create(createArticleDto: CreateArticleDto, userId: string) {
    const orderId = await this.getNewOrderId(
      createArticleDto.notebookId,
      userId,
    );
    return this.prisma.article.create({
      data: {
        orderId,
        name: createArticleDto.name,
        notebookId: createArticleDto.notebookId,
        createdBy: userId,
        updatedBy: userId,
      },
    });
  }

  async findAll(notebookId: string, userId: string) {
    return await this.prisma.article.findMany({
      where: { notebookId, createdBy: userId },
    });
  }

  async findOne(id: string, userId: string) {
    return await this.prisma.article.findUnique({
      where: { id, createdBy: userId },
    });
  }

  async update(updateArticleDto: UpdateArticleDto, userId: string) {
    return await this.prisma.article.update({
      where: { id: updateArticleDto.id, createdBy: userId },
      data: {
        name: updateArticleDto.name,
        notebookId: updateArticleDto.notebookId,
        orderId: updateArticleDto.orderId,
      },
    });
  }

  async updateTags(articleTagsDto: ArticleTagsDto, userId: string) {
    if (articleTagsDto.tags.length > 0 && articleTagsDto.tags.length < 30) {
      const tagsList = await this.tagService.createTags(
        articleTagsDto.tags,
        userId,
      );
      return await this.prisma.article.update({
        where: {
          id: articleTagsDto.id,
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

  async updateRefUrls(articleRefUrlsDto: ArticleRefUrlsDto, userId: string) {
    if (
      articleRefUrlsDto.refUrls.length > 0 &&
      articleRefUrlsDto.refUrls.length < 30
    ) {
      const refUrlsList = await this.refurlService.createRefUrls(
        articleRefUrlsDto.refUrls,
        userId,
      );
      return await this.prisma.article.update({
        where: {
          id: articleRefUrlsDto.id,
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

  remove(id: string, userId: string) {
    return this.prisma.article.delete({
      where: {
        id: id,
        createdBy: userId,
      },
    });
  }
}
