import {
  ArrayMaxSize,
  ArrayNotEmpty,
  IsAlphanumeric,
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { CreateRefurlDto } from '../refurl/dto/create-refurl.dto';

export class RefUrlsListDto {
  @IsNotEmpty()
  @IsString()
  @IsAlphanumeric()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'section id must be between 2 and 50 characters' })
  @IsUUID()
  readonly id: string;

  @ArrayNotEmpty()
  @ArrayMaxSize(30)
  readonly refUrls?: Array<CreateRefurlDto>;
}
