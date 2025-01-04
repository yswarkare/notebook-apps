import { PartialType } from '@nestjs/mapped-types';
import { CreateTagDto } from './create-tag.dto';
import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateTagDto extends PartialType(CreateTagDto) {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'notebook id must be between 2 and 50 characters' })
  @IsUUID()
  readonly id: string;
}
