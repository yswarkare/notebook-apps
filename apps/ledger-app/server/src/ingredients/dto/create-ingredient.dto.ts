import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateIngredientDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 150, { message: 'name must be between 2 and 150 characters' })
  readonly name: string;

  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 255, { message: 'name must be between 2 and 255 characters' })
  readonly description: string;
}
