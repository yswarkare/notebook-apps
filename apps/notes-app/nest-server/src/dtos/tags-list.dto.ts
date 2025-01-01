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
import { CreateTagDto } from '../tag/dto/create-tag.dto';

export class TagsListDto {
  @IsNotEmpty()
  @IsString()
  @IsAlphanumeric()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'uuid must be between 2 and 50 characters' })
  @IsUUID()
  readonly id: string;

  @ArrayNotEmpty()
  @ArrayMaxSize(30)
  readonly tags?: Array<CreateTagDto>;
}
