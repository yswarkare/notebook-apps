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
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from '../token/guards/jwt-auth.guard';
import { CurrentUserId } from '../auth/current-user-id.decorator';
import { ProductDto } from './dto/Product.dto';
import { ResponseDto } from '../dtos/ResponseDto';

@Controller('products')
@UseGuards(JwtAuthGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(
    @Body() createProductDto: CreateProductDto,
    @CurrentUserId() userId: string,
  ) {
    return this.productsService.create(createProductDto, userId);
  }

  @Get('/list')
  async findAll(@CurrentUserId() userId: string): Promise<Array<ProductDto>> {
    return await this.productsService.findAll(userId);
  }

  @Get('/page')
  async findPaginated(
    @CurrentUserId() userId: string,
    @Query('pageNumber') pageNumber: number = 1,
    @Query('itemsPerPage') itemsPerPage: number = 5,
    @Query('orderBy') orderBy: 'asc' | 'desc' = 'asc',
  ): Promise<ResponseDto<Array<ProductDto>>> {
    return await this.productsService.findPaginated(
      userId,
      pageNumber,
      itemsPerPage,
      orderBy,
    );
  }

  @Get('/name/:name')
  async findByName(
    @Param('name') name: string,
    @CurrentUserId() userId: string,
  ) {
    return await this.productsService.findByName(name, userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUserId() userId: string) {
    return this.productsService.findOne(id, userId);
  }

  @Patch(':id')
  update(
    @Body() updateProductDto: UpdateProductDto,
    @CurrentUserId() userId: string,
  ) {
    return this.productsService.update(updateProductDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUserId() userId: string) {
    return this.productsService.remove(id, userId);
  }
}
