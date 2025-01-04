import { PartialType } from '@nestjs/mapped-types';
import { CreateRefurlDto } from './create-refurl.dto';
import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateRefurlDto extends PartialType(CreateRefurlDto) {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'notebook id must be between 2 and 50 characters' })
  @IsUUID()
  readonly id: string;
}
