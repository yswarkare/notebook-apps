import { Transform } from 'class-transformer';
import {
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';

export class CreateRecipeIngredientDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 255, { message: 'name must be between 2 and 150 characters' })
  readonly name: string;

  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 255, {
    message: 'description must be between 2 and 255 characters',
  })
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  @IsDecimal()
  @Transform(({ value }) => value.trim())
  @Length(2, 15, {
    message: 'quantity must be between 2 and 15 characters',
  })
  readonly quantity: number;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'uuid must be between 2 and 50 characters' })
  @IsUUID()
  readonly recipeId: string;

  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'uuid must be between 2 and 50 characters' })
  @IsUUID()
  readonly ingredientId: string;

  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'uuid must be between 2 and 50 characters' })
  @IsUUID()
  readonly productId: string;
}
