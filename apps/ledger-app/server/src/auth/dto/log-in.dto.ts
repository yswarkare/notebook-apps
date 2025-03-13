import { Transform } from 'class-transformer';
import { IsAlphanumeric, IsNotEmpty, IsString, Length } from 'class-validator';
import { IsValidPassword } from '../../validators/is-valid-password.validator';

export class LogInDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @IsAlphanumeric()
  @Length(2, 50, { message: 'username must be between 2 and 50 characters' })
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(8, 50, { message: 'Password must be between 8 and 50 characters' })
  @IsValidPassword()
  readonly password: string;
}
