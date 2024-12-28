import { Injectable } from '@nestjs/common';
import { CreateRefurlDto } from './dto/create-refurl.dto';
import { UpdateRefurlDto } from './dto/update-refurl.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class RefurlService {
  constructor(private readonly prisma: PrismaService) {}

  private refUrlToInsert(refUrl: CreateRefurlDto, userId) {
    return {
      url: refUrl.url,
      type: refUrl.type,
      createdBy: userId,
      updatedBy: userId,
    };
  }

  async create(createRefurlDto: CreateRefurlDto, userId: string) {
    const refUrl = this.refUrlToInsert(createRefurlDto, userId);
    return await this.prisma.referenceUrl.create({
      data: refUrl,
    });
  }

  async createRefUrls(refUrls: Array<CreateRefurlDto>, userId: string) {
    try {
      const urlList = refUrls.map((refUrl) => refUrl.url);
      const storedUrlList = await this.findManyByUrlAndUserId(urlList, userId);
      const newRefUrls = [];
      for (const refUrl of refUrls) {
        if (!storedUrlList?.find((el) => el.url === refUrl.url)) {
          newRefUrls.push(this.refUrlToInsert(refUrl, userId));
        }
      }
      if (newRefUrls.length > 0) {
        const savedList = await this.prisma.referenceUrl.createManyAndReturn({
          data: newRefUrls,
        });
        storedUrlList.concat(savedList);
      }
      return storedUrlList;
    } catch (error) {
      throw new ExceptionsHandler(error);
    }
  }

  findAll() {
    return `This action returns all refurl`;
  }

  async findManyByUrlAndUserId(urlList: Array<string>, userId: string) {
    return await this.prisma.referenceUrl.findMany({
      where: {
        createdBy: userId,
        url: {
          in: urlList,
        },
      },
    });
  }

  async findByUrlAndUserId(url: string, userId: string) {
    return await this.prisma.referenceUrl.findUnique({
      where: {
        url_createdBy: { url, createdBy: userId },
      },
    });
  }

  async findOne(id: string, userId: string) {
    return await this.prisma.referenceUrl.findUnique({
      where: { id, createdBy: userId },
    });
  }

  async update(updateRefurlDto: UpdateRefurlDto, userId: string) {
    return await this.prisma.referenceUrl.update({
      where: {
        id: updateRefurlDto.id,
        createdBy: userId,
      },
      data: {
        url: updateRefurlDto.url,
        type: updateRefurlDto.type,
        createdBy: userId,
        updatedBy: userId,
      },
    });
  }

  async remove(id: string, userId: string) {
    return await this.prisma.referenceUrl.delete({
      where: { id, createdBy: userId },
    });
  }
}
