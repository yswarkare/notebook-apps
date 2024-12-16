import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { LogInDto } from './dto/log-in.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrentUser } from './current-user.decorator';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signup(@Body() signUpUserDto: SignUpDto) {
    return this.authService.register(signUpUserDto);
  }

  @Post('/login')
  @UseGuards(LocalAuthGuard)
  async login(@Body() logInUserDto: LogInDto, @CurrentUser() user: User) {
    console.log(user);
    return this.authService.login(logInUserDto);
  }
}
