import {
  IsNotEmpty,
  IsString,
  IsAlpha,
  IsEnum,
  Length,
  IsEmail,
  IsAlphanumeric,
  IsOptional,
  IsStrongPassword,
  Matches,
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
  @IsString()
  @Matches(/^(\+)?(\(?\d+\)?)(([\s-]+)?(\d+)){0,}$/g)
  @Length(10, 15, {
    message: 'Phone Number must be between 10 and 15 characters',
  })
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
  @IsStrongPassword()
  readonly password: string;

  @IsOptional()
  @IsEnum(UserRole)
  readonly role: UserRole;
}
