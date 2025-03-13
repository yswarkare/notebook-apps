import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { JwtAuthGuard } from '../token/guards/jwt-auth.guard';
import { CurrentUserId } from '../auth/current-user-id.decorator';
import { ResponseDto } from 'src/dtos/ResponseDto';
import { RecipeDto } from './dto/recipe.dto';

@Controller('recipe')
@UseGuards(JwtAuthGuard)
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  async create(
    @Body() createRecipeDto: CreateRecipeDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.recipeService.create(createRecipeDto, userId);
  }

  @Get('/page')
  async findPaginated(
    @CurrentUserId() userId: string,
    @Query('productId') productId: string,
    @Query('pageNumber') pageNumber: number = 1,
    @Query('itemsPerPage') itemsPerPage: number = 5,
    @Query('orderBy') orderBy: 'asc' | 'desc' = 'asc',
  ): Promise<ResponseDto<Array<RecipeDto>>> {
    return await this.recipeService.findPaginated(
      userId,
      productId,
      pageNumber,
      itemsPerPage,
      orderBy,
    );
  }

  @Get()
  async findAll(
    @Param('recipeId') recipeId: string,
    @CurrentUserId() userId: string,
  ) {
    return await this.recipeService.findAll(recipeId, userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUserId() userId: string) {
    return await this.recipeService.findOne(id, userId);
  }

  @Patch()
  async update(
    @Body() updateRecipeDto: UpdateRecipeDto,
    @CurrentUserId() userId: string,
  ) {
    return await this.recipeService.update(updateRecipeDto, userId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUserId() userId: string) {
    return await this.recipeService.remove(id, userId);
  }
}
