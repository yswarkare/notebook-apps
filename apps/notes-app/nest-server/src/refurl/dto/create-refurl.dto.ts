import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length } from 'class-validator';

type urlType = 'url' | 'video' | 'article' | 'image';

export class CreateRefurlDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 255, {
    message: 'notebook name must be between 2 and 255 characters',
  })
  readonly url: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 255, {
    message: 'notebook name must be between 2 and 255 characters',
  })
  readonly type: urlType;
}
