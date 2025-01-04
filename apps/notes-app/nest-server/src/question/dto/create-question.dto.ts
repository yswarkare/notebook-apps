import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 255, {
    message: 'section name must be between 2 and 255 characters',
  })
  readonly name: string;

  @IsNotEmpty()
  @IsString()
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
  readonly question: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 20000, {
    message: 'section name must be between 2 and 20000 characters',
  })
  readonly answer: string;
}
