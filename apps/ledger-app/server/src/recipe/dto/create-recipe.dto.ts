import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateRecipeDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 150, { message: 'name must be between 2 and 150 characters' })
  readonly name: string;

  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 255, {
    message: 'description must be between 2 and 255 characters',
  })
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'uuid must be between 2 and 50 characters' })
  @IsUUID()
  readonly productId: string;
}
