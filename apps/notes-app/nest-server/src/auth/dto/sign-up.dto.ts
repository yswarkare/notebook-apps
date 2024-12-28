import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsAlpha,
  Length,
  IsAlphanumeric,
  IsEmail,
  IsStrongPassword,
  Matches,
} from 'class-validator';
import { IsValidPassword } from '../../validators/is-valid-password.validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  @IsAlpha()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'firstname must be between 2 and 50 characters' })
  readonly firstname: string;

  @IsNotEmpty()
  @IsString()
  @IsAlpha()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'lastname must be between 2 and 50 characters' })
  readonly lastname: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 50, { message: 'email must be between 2 and 50 characters' })
  @IsEmail({}, { message: 'Invalid email address' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^(\+)?(\(?\d+\)?)(([\s-]+)?(\d+)){0,}$/g)
  @Length(10, 15, {
    message: 'Phone Number must be between 10 and 15 characters',
  })
  readonly phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @IsAlphanumeric()
  @Length(2, 50, { message: 'username must be between 2 and 50 characters' })
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 50, { message: 'Password must be between 8 and 50 characters' })
  @Transform(({ value }) => value.trim())
  @IsValidPassword()
  @IsStrongPassword()
  readonly password: string;
}
