import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipeIngredientDto } from './create-recipe-ingredient.dto';
import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateRecipeIngredientDto extends PartialType(
  CreateRecipeIngredientDto,
) {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'uuid must be between 2 and 50 characters' })
  @IsUUID()
  readonly id: string;
}
