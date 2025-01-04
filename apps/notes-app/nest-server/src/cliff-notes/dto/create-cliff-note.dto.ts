import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateCliffNoteDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 255, {
    message: 'notebook name must be between 2 and 255 characters',
  })
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'notebook id must be between 2 and 50 characters' })
  @IsUUID()
  readonly notebookId: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 20000, {
    message: 'notebook name must be between 2 and 20000 characters',
  })
  readonly content: string;
}
