import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export class LogInDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/g)
  readonly password: string;
}
