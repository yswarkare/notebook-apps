import { PartialType } from '@nestjs/mapped-types';
import { CreateNotebookDto } from './create-notebook.dto';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  Max,
  Min,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateNotebookDto extends PartialType(CreateNotebookDto) {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'notebook id must be between 2 and 50 characters' })
  @IsUUID()
  readonly id: string;

  @IsOptional()
  @Transform(({ value }) => value.trim())
  @IsNumber()
  @Min(0)
  @Max(10000)
  readonly orderId: number;
}
