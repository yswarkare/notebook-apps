import { PartialType } from '@nestjs/mapped-types';
import { CreateCliffNoteDto } from './create-cliff-note.dto';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  Length,
  Max,
  Min,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateCliffNoteDto extends PartialType(CreateCliffNoteDto) {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, {
    message: 'cliff note id must be between 2 and 50 characters',
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
