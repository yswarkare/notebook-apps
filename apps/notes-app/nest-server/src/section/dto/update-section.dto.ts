import { PartialType } from '@nestjs/mapped-types';
import { CreateSectionDto } from './create-section.dto';
import {
  IsAlphanumeric,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Length,
  Max,
  Min,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateSectionDto extends PartialType(CreateSectionDto) {
  @IsNotEmpty()
  @IsString()
  @IsAlphanumeric()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, {
    message: 'section id must be between 2 and 50 characters',
  })
  @IsUUID()
  readonly id: string;

  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @IsNumber()
  @Min(0)
  @Max(10000)
  readonly orderId: number;
}
