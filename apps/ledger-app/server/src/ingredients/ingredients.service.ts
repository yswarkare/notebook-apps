import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ResponseDto } from '../dtos/ResponseDto';
import { IngredientDto } from './dto/ingredient.dto';

@Injectable()
export class IngredientsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createIngredientDto: CreateIngredientDto, userId: string) {
    await this.prisma.ingredient.create({
      data: {
        ...createIngredientDto,
        createdBy: userId,
        updatedBy: userId,
      },
    });
  }

  async findAll(userId: string): Promise<Array<IngredientDto>> {
    const ingredients = await this.prisma.ingredient.findMany({
      where: { createdBy: userId },
      select: { id: true, name: true, description: true },
    });
    return ingredients;
  }

  async findPaginated(
    userId: string,
    pageNumber: number = 1,
    itemsPerPage: number = 5,
    orderBy: 'asc' | 'desc' = 'asc',
  ): Promise<ResponseDto<Array<IngredientDto>>> {
    const skipRows = (pageNumber - 1) * itemsPerPage;
    const totalItems = await this.prisma.ingredient.count({
      where: { createdBy: userId },
    });
    const ingredients = await this.prisma.ingredient.findMany({
      where: { createdBy: userId },
      select: { id: true, name: true, description: true },
      skip: skipRows,
      take: itemsPerPage,
      orderBy: {
        name: orderBy,
      },
    });
    const result: ResponseDto<Array<IngredientDto>> = {
      result: ingredients,
      totalPages: Math.ceil(totalItems / itemsPerPage),
      pageNumber,
      totalItems,
      itemsPerPage,
    };
    return result;
  }

  async findOne(id: string, userId: string) {
    const ingredient = await this.prisma.ingredient.findMany({
      where: { id, createdBy: userId },
      select: { id: true, name: true, description: true },
    });
    return ingredient;
  }

  async update(updateIngredientDto: UpdateIngredientDto, userId: string) {
    await this.prisma.ingredient.update({
      where: {
        id: updateIngredientDto.id,
        createdBy: userId,
      },
      data: {
        name: updateIngredientDto.name,
        description: updateIngredientDto.description,
      },
    });
    return `This action updates a #${updateIngredientDto.id} ingredient`;
  }

  async remove(id: string, userId: string) {
    await this.prisma.ingredient.delete({
      where: { id, createdBy: userId },
    });
    return `This action removes a #${id} ingredient`;
  }
}
