import { PartialType } from '@nestjs/mapped-types';
import { CreateCliffNoteDto } from './create-cliff-note.dto';
import {
  IsAlphanumeric,
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateCliffNoteDto extends PartialType(CreateCliffNoteDto) {
  @IsNotEmpty()
  @IsString()
  @IsAlphanumeric()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, {
    message: 'cliff note id must be between 2 and 50 characters',
  })
  @IsUUID()
  readonly id: string;
}
