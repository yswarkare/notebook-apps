import { Injectable } from '@nestjs/common';
import { CreateRecipeIngredientDto } from './dto/create-recipe-ingredient.dto';
import { UpdateRecipeIngredientDto } from './dto/update-recipe-ingredient.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipeIngredientsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createRecipeIngredientDto: CreateRecipeIngredientDto,
    userId: string,
  ) {
    const newObj = {
      name: createRecipeIngredientDto.name,
      description: createRecipeIngredientDto.description,
      quantity: createRecipeIngredientDto.quantity,
      createdBy: userId,
      updatedBy: userId,
    };
    await this.prisma.recipeIngredients.create({
      data: {
        ...newObj,
        recipe: { connect: { id: createRecipeIngredientDto.recipeId } },
        ingredient: { connect: { id: createRecipeIngredientDto.ingredientId } },
      },
    });
    return 'This action adds a new recipeIngredient';
  }

  async findAll(recipeId: string, userId: string) {
    const recipeIngredients = await this.prisma.recipeIngredients.findMany({
      where: {
        recipeId: recipeId,
        createdBy: userId,
      },
      select: { id: true, name: true, description: true, quantity: true },
    });
    return recipeIngredients;
  }

  async findOne(id: string, userId: string) {
    const recipeIngredient = await this.prisma.recipeIngredients.findFirst({
      where: { id, createdBy: userId },
    });
    return recipeIngredient;
  }

  async update(
    updateRecipeIngredientDto: UpdateRecipeIngredientDto,
    userId: string,
  ) {
    const updated = {
      name: updateRecipeIngredientDto.name,
      description: updateRecipeIngredientDto.description,
      quantity: updateRecipeIngredientDto.quantity,
    };
    await this.prisma.recipeIngredients.update({
      where: { id: updateRecipeIngredientDto.id, createdBy: userId },
      data: { ...updated },
    });
    return `This action updates a #${updateRecipeIngredientDto.name} recipeIngredient`;
  }

  async remove(id: string, userId: string) {
    await this.prisma.recipeIngredients.delete({
      where: { id, createdBy: userId },
    });
    return `This action removes a #${id} recipeIngredient`;
  }
}
