import { Transform } from 'class-transformer';
import {
  IsAlphanumeric,
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';

export class CreateArticleDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 255, {
    message: 'article name must be between 2 and 255 characters',
  })
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @IsAlphanumeric()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'notebook id must be between 2 and 50 characters' })
  @IsUUID()
  readonly notebookId: string;
}
