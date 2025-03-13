import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ResponseDto } from 'src/dtos/ResponseDto';
import { RecipeDto } from './dto/recipe.dto';

@Injectable()
export class RecipeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRecipeDto: CreateRecipeDto, userId: string) {
    await this.prisma.recipe.create({
      data: {
        ...createRecipeDto,
        createdBy: userId,
        updatedBy: userId,
      },
    });
    return `created recipe with name ${createRecipeDto.name}`;
  }

  async findAll(productId: string, userId: string) {
    const recipes = this.prisma.recipe.findMany({
      where: { productId: productId, createdBy: userId },
      select: { id: true, name: true, description: true },
    });
    return recipes;
  }

  async findOne(id: string, userId: string) {
    const recipe = await this.prisma.recipe.findFirst({
      where: { id, createdBy: userId },
      select: { id: true, name: true, description: true },
    });
    return recipe;
  }

  async findPaginated(
    userId: string,
    productId: string,
    pageNumber: number = 1,
    itemsPerPage: number = 5,
    orderBy: 'asc' | 'desc' = 'asc',
  ): Promise<ResponseDto<Array<RecipeDto>>> {
    const skipRows = (pageNumber - 1) * itemsPerPage;
    const totalItems = await this.prisma.product.count({
      where: { createdBy: userId },
    });
    const recipes = await this.prisma.recipe.findMany({
      where: { createdBy: userId, productId },
      select: { id: true, name: true, description: true },
      skip: skipRows,
      take: itemsPerPage,
      orderBy: {
        name: orderBy,
      },
    });
    const result: ResponseDto<Array<RecipeDto>> = {
      result: recipes,
      totalPages: Math.ceil(totalItems / itemsPerPage),
      pageNumber,
      totalItems,
      itemsPerPage,
    };
    return result;
  }

  async update(updateRecipeDto: UpdateRecipeDto, userId: string) {
    await this.prisma.recipe.update({
      where: { id: updateRecipeDto.id, createdBy: userId },
      data: { ...updateRecipeDto, updatedBy: userId },
    });
    return `This action updates a ${updateRecipeDto.name} recipe`;
  }

  async remove(id: string, userId: string) {
    await this.prisma.recipe.delete({
      where: { id, createdBy: userId },
    });
    return `This action removes a #${id} recipe`;
  }
}
