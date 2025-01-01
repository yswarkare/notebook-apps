import { Injectable } from '@nestjs/common';
import { CreateCliffNoteDto } from './dto/create-cliff-note.dto';
import { UpdateCliffNoteDto } from './dto/update-cliff-note.dto';
import { PrismaService } from '../prisma/prisma.service';
import { TagService } from '../tag/tag.service';
import { RefurlService } from '../refurl/refurl.service';
import { TagsListDto } from '../dtos/tags-list.dto';
import { RefUrlsListDto } from '../dtos/ref-urls-list.dto';

@Injectable()
export class CliffNotesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tagService: TagService,
    private readonly refurlService: RefurlService,
  ) {}

  private async getNewOrderId(notebookId: string, userId: string) {
    const prevOrderId = await this.prisma.cliffNotes.aggregate({
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

  async create(createCliffNoteDto: CreateCliffNoteDto, userId: string) {
    const orderId = await this.getNewOrderId(
      createCliffNoteDto.notebookId,
      userId,
    );
    return await this.prisma.cliffNotes.create({
      data: {
        name: createCliffNoteDto.name,
        content: createCliffNoteDto.content,
        notebookId: createCliffNoteDto.notebookId,
        orderId: orderId,
        createdBy: userId,
        updatedBy: userId,
      },
    });
  }

  async findAll(notebookId: string, userId: string) {
    return await this.prisma.cliffNotes.findMany({
      where: { notebookId, createdBy: userId },
    });
  }

  async findOne(id: string, userId: string) {
    return await this.prisma.cliffNotes.findUnique({
      where: { id, createdBy: userId },
    });
  }

  async update(updateCliffNoteDto: UpdateCliffNoteDto, userId: string) {
    return await this.prisma.cliffNotes.update({
      where: {
        id: updateCliffNoteDto.id,
        createdBy: userId,
      },
      data: {
        name: updateCliffNoteDto.name,
        orderId: updateCliffNoteDto.orderId,
        content: updateCliffNoteDto.content,
        notebookId: updateCliffNoteDto.notebookId,
        updatedBy: userId,
      },
    });
  }

  async updateTags(TagsListDto: TagsListDto, userId: string) {
    if (TagsListDto.tags.length > 0 && TagsListDto.tags.length < 30) {
      const tagsList = await this.tagService.createTags(
        TagsListDto.tags,
        userId,
      );
      return await this.prisma.cliffNotes.update({
        where: {
          id: TagsListDto.id,
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
      return await this.prisma.cliffNotes.update({
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

  remove(id: string, userId: string) {
    return this.prisma.cliffNotes.delete({
      where: {
        id: id,
        createdBy: userId,
      },
    });
  }
}
