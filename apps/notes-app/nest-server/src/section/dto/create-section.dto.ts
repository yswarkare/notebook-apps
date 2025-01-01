import { Transform } from 'class-transformer';
import {
  IsAlphanumeric,
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';

export class CreateSectionDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 255, {
    message: 'section name must be between 2 and 255 characters',
  })
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @IsAlphanumeric()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'article id must be between 2 and 50 characters' })
  @IsUUID()
  readonly articleId: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 20000, {
    message: 'section name must be between 2 and 20000 characters',
  })
  readonly content: string;
}
