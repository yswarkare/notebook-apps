import {
  IsNotEmpty,
  IsString,
  IsAlpha,
  Matches,
  IsEnum,
  Length,
  IsEmail,
  IsAlphanumeric,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { IsValidPassword } from '../../validators/is-valid-password.validator';

export enum UserRole {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  USER = 'USER',
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'firstname must be between 2 and 50 characters' })
  @IsAlpha()
  readonly firstname: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'lastname must be between 2 and 50 characters' })
  @IsAlpha()
  readonly lastname: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 50, { message: 'email must be between 2 and 50 characters' })
  @IsEmail({}, { message: 'Invalid email address' })
  // @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/g)
  readonly email: string;

  @IsNotEmpty()
  @IsNumber()
  @Length(10, 20, {
    message: 'Phone Number must be between 10 and 20 characters',
  })
  @Matches(/^[6789]\d{9}$/)
  readonly phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(2, 50, { message: 'username must be between 2 and 50 characters' })
  @IsAlphanumeric()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(8, 50, { message: 'Password must be between 8 and 50 characters' })
  @IsValidPassword()
  readonly password: string;

  @IsOptional()
  @IsEnum(UserRole)
  readonly role: UserRole;
}
