import { ConflictException, Injectable } from '@nestjs/common';
import { CreateNotebookDto } from './dto/create-notebook.dto';
import { UpdateNotebookDto } from './dto/update-notebook.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Notebook } from '@prisma/client';
import { TagService } from 'src/tag/tag.service';
import { NotebookTagsDto } from './dto/notebook-tags.dto';
import { NotebookRefUrlsDto } from './dto/notebook-refUrls.dto';
import { RefurlService } from '../refurl/refurl.service';

@Injectable()
export class NotebookService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tagService: TagService,
    private readonly refurlService: RefurlService,
  ) {}

  private async getNewOrderId(userId: string) {
    const prevOrderId = await this.prisma.notebook.aggregate({
      where: {
        userId: userId,
      },
      _max: {
        orderId: true,
      },
    });
    if (!prevOrderId._max.orderId) return 1;
    return prevOrderId._max.orderId + 1;
  }

  async create(createNotebookDto: CreateNotebookDto, userId: string) {
    const notebook = await this.findByNameAndUserId(
      createNotebookDto.name,
      userId,
    );
    if (notebook) throw new ConflictException('notebook name already exists');
    const newOrderId = await this.getNewOrderId(userId);
    await this.prisma.notebook.create({
      data: {
        name: createNotebookDto.name,
        orderId: newOrderId,
        createdBy: userId,
        updatedBy: userId,
        userId: userId,
      },
    });
    return 'This action adds a new notebook';
  }

  async findByUserId(userId: string): Promise<Array<Notebook>> {
    const notebookList: Array<Notebook> = await this.prisma.notebook.findMany({
      where: {
        userId: userId,
      },
    });
    return notebookList;
  }

  async findByNameAndUserId(name: string, userId: string) {
    return await this.prisma.notebook.findUnique({
      where: {
        name_userId: {
          name: name,
          userId: userId,
        },
      },
    });
  }

  async findOne(id: string, userId: string) {
    return await this.prisma.notebook.findUnique({
      where: { id, userId },
    });
  }

  async update(updateNotebookDto: UpdateNotebookDto, userId: string) {
    return await this.prisma.notebook.update({
      where: {
        id: updateNotebookDto.id,
        userId: userId,
      },
      data: {
        name: updateNotebookDto.name,
        orderId: updateNotebookDto.orderId,
      },
    });
  }

  async updateTags(notebookTagsDto: NotebookTagsDto, userId: string) {
    if (notebookTagsDto.tags.length > 0 && notebookTagsDto.tags.length < 30) {
      const tagsList = await this.tagService.createTags(
        notebookTagsDto.tags,
        userId,
      );
      return await this.prisma.notebook.update({
        where: {
          id: notebookTagsDto.id,
          userId: userId,
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

  async updateRefUrls(notebookRefUrlsDto: NotebookRefUrlsDto, userId: string) {
    if (
      notebookRefUrlsDto.refUrls.length > 0 &&
      notebookRefUrlsDto.refUrls.length < 30
    ) {
      const refUrlsList = await this.refurlService.createRefUrls(
        notebookRefUrlsDto.refUrls,
        userId,
      );
      return await this.prisma.notebook.update({
        where: {
          id: notebookRefUrlsDto.id,
          userId: userId,
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

  async remove(notebookId: string, userId: string) {
    await this.prisma.notebook.delete({
      where: {
        id: notebookId,
        userId: userId,
      },
    });
    return `This action removes a #${notebookId} notebook`;
  }
}
