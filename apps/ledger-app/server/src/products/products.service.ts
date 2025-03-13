import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ResponseDto } from '../dtos/ResponseDto';
import { ProductDto } from './dto/Product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto, userId: string) {
    await this.prisma.product.create({
      data: {
        ...createProductDto,
        createdBy: userId,
        updatedBy: userId,
      },
    });
  }

  async findAll(userId: string): Promise<Array<ProductDto>> {
    const products = await this.prisma.product.findMany({
      where: { createdBy: userId },
      select: { id: true, name: true, description: true },
    });
    return products;
  }

  async findPaginated(
    userId: string,
    pageNumber: number = 1,
    itemsPerPage: number = 5,
    orderBy: 'asc' | 'desc' = 'asc',
  ): Promise<ResponseDto<Array<ProductDto>>> {
    const skipRows = (pageNumber - 1) * itemsPerPage;
    const totalItems = await this.prisma.product.count({
      where: { createdBy: userId },
    });
    const products = await this.prisma.product.findMany({
      where: { createdBy: userId },
      select: { id: true, name: true, description: true },
      skip: skipRows,
      take: itemsPerPage,
      orderBy: {
        name: orderBy,
      },
    });
    const result: ResponseDto<Array<ProductDto>> = {
      result: products,
      totalPages: Math.ceil(totalItems / itemsPerPage),
      pageNumber,
      totalItems,
      itemsPerPage,
    };
    return result;
  }

  async findOne(id: string, userId: string) {
    const product = await this.prisma.product.findMany({
      where: { id, createdBy: userId },
      select: { id: true, name: true, description: true },
    });
    return product;
  }

  async findByName(name: string, userId: string) {
    try {
      const correctedName = name.replace('-', ' ');
      const product = await this.prisma.product.findFirstOrThrow({
        where: {
          name: { equals: correctedName, mode: 'insensitive' },
          createdBy: userId,
        },
        select: { id: true, name: true, description: true },
      });
      if (!product) {
        throw new NotFoundException(`Product with ${name} doesn't exists!`);
      }
      return product;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(updateProductDto: UpdateProductDto, userId: string) {
    await this.prisma.product.update({
      where: {
        id: updateProductDto.id,
        createdBy: userId,
      },
      data: {
        name: updateProductDto.name,
        description: updateProductDto.description,
      },
    });
    return `This action updates a #${updateProductDto.id} product`;
  }

  async remove(id: string, userId: string) {
    await this.prisma.product.delete({
      where: { id, createdBy: userId },
    });
    return `This action removes a #${id} product`;
  }
}
