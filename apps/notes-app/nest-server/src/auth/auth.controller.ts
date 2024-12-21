import { Controller, Post, Body, UseGuards, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { LocalAuthGuard } from '../token/guards/local-auth.guard';
import { CurrentUser } from './current-user.decorator';
import { User } from '@prisma/client';
import { Response } from 'express';
import { JwtRefreshAuthGuard } from '../token/guards/jwt-refresh-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signup(
    @Body() signUpUserDto: SignUpDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.register(signUpUserDto, res);
  }

  @Post('/login')
  @UseGuards(LocalAuthGuard)
  async login(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.login(user, res);
    return null;
  }

  @Post('/refresh')
  @UseGuards(JwtRefreshAuthGuard)
  async refresh(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.login(user, res);
    return null;
  }
}
