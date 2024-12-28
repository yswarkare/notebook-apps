import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TagService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTagDto: CreateTagDto, userId: string) {
    const tag = await this.findByTagNameAndUserId(createTagDto.name, userId);
    if (!tag) {
      return await this.prisma.tag.create({
        data: {
          name: createTagDto.name,
          createdBy: userId,
          updatedBy: userId,
        },
      });
    } else {
      return tag;
    }
  }

  async createTags(createTagDtoList: Array<CreateTagDto>, userId: string) {
    const newTagsList = [];
    const tagNamesList = createTagDtoList.map((tag) => tag.name);
    const storedTags = await this.findManyByTagNameAndUserId(
      tagNamesList,
      userId,
    );
    for (const tag of createTagDtoList) {
      if (!storedTags?.find((tg) => tag.name === tg.name)) {
        newTagsList.push({
          name: tag.name,
          createdBy: userId,
          updatedBy: userId,
        });
      }
    }
    if (newTagsList.length > 0) {
      const savedList = await this.prisma.tag.createManyAndReturn({
        data: newTagsList,
      });
      storedTags.concat(savedList);
    }
    return storedTags;
  }

  findAll() {
    return `This action returns all tag`;
  }

  async findManyByTagNameAndUserId(tagList: Array<string>, userId: string) {
    return await this.prisma.tag.findMany({
      where: {
        createdBy: userId,
        name: {
          in: tagList,
        },
      },
    });
  }

  async findByTagNameAndUserId(tagName: string, userId: string) {
    return await this.prisma.tag.findUnique({
      where: {
        name_createdBy: {
          name: tagName,
          createdBy: userId,
        },
      },
    });
  }

  async findOne(tagId: string, userId: string) {
    return await this.prisma.tag.findUnique({
      where: {
        id: tagId,
        createdBy: userId,
      },
    });
  }

  async update(updateTagDto: UpdateTagDto, userId: string) {
    return this.prisma.tag.update({
      where: {
        id: updateTagDto.id,
        createdBy: userId,
      },
      data: {
        name: updateTagDto.name,
      },
    });
  }

  async remove(tagId: string, userId: string) {
    return this.prisma.tag.delete({
      where: {
        id: tagId,
        createdBy: userId,
      },
    });
  }
}
