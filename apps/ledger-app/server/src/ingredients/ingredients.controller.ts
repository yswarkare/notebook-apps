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
import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { CurrentUserId } from '../auth/current-user-id.decorator';
import { JwtAuthGuard } from '../token/guards/jwt-auth.guard';
import { IngredientDto } from './dto/ingredient.dto';
import { ResponseDto } from '../dtos/ResponseDto';

@Controller('ingredients')
@UseGuards(JwtAuthGuard)
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Post()
  create(
    @Body() createIngredientDto: CreateIngredientDto,
    @CurrentUserId() userId: string,
  ) {
    return this.ingredientsService.create(createIngredientDto, userId);
  }

  @Get('/list')
  async findAll(
    @CurrentUserId() userId: string,
  ): Promise<Array<IngredientDto>> {
    return await this.ingredientsService.findAll(userId);
  }

  @Get('/page')
  async findPaginated(
    @CurrentUserId() userId: string,
    @Query('pageNumber') pageNumber: number = 1,
    @Query('itemsPerPage') itemsPerPage: number = 5,
    @Query('orderBy') orderBy: 'asc' | 'desc' = 'asc',
  ): Promise<ResponseDto<Array<IngredientDto>>> {
    return await this.ingredientsService.findPaginated(
      userId,
      pageNumber,
      itemsPerPage,
      orderBy,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUserId() userId: string) {
    return this.ingredientsService.findOne(id, userId);
  }

  @Patch()
  update(
    @Body() updateIngredientDto: UpdateIngredientDto,
    @CurrentUserId() userId: string,
  ) {
    return this.ingredientsService.update(updateIngredientDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUserId() userId: string) {
    return this.ingredientsService.remove(id, userId);
  }
}
