import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RecipeIngredientsService } from './recipe-ingredients.service';
import { CreateRecipeIngredientDto } from './dto/create-recipe-ingredient.dto';
import { UpdateRecipeIngredientDto } from './dto/update-recipe-ingredient.dto';
import { JwtAuthGuard } from '../token/guards/jwt-auth.guard';
import { CurrentUserId } from 'src/auth/current-user-id.decorator';

@Controller('recipe-ingredients')
@UseGuards(JwtAuthGuard)
export class RecipeIngredientsController {
  constructor(
    private readonly recipeIngredientsService: RecipeIngredientsService,
  ) {}

  @Post()
  async create(
    @Body() createRecipeIngredientDto: CreateRecipeIngredientDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.recipeIngredientsService.create(
      createRecipeIngredientDto,
      userId,
    );
  }

  @Get('/list')
  async findAll(
    @Param('recipeId') recipeId: string,
    @CurrentUserId() userId: string,
  ) {
    return this.recipeIngredientsService.findAll(recipeId, userId);
  }

  @Get()
  async findOne(@Param('id') id: string, @CurrentUserId() userId: string) {
    return await this.recipeIngredientsService.findOne(id, userId);
  }

  @Patch()
  async update(
    @Body() updateRecipeIngredientDto: UpdateRecipeIngredientDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.recipeIngredientsService.update(
      updateRecipeIngredientDto,
      userId,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUserId() userId: string) {
    return await this.recipeIngredientsService.remove(id, userId);
  }
}
