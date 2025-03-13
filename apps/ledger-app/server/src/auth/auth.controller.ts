import {
  Controller,
  Post,
  Body,
  UseGuards,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { LocalAuthGuard } from '../token/guards/local-auth.guard';
import { CurrentUser } from './current-user.decorator';
import { User } from '@prisma/client';
import { Response } from 'express';
import { JwtRefreshAuthGuard } from '../token/guards/jwt-refresh-auth.guard';
import { JwtAuthGuard } from 'src/token/guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-up')
  signup(
    @Body() signUpUserDto: SignUpDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.register(signUpUserDto, res);
  }

  @Post('/log-in')
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
    console.log('/refresh');
    await this.authService.login(user, res);
    return null;
  }

  @Post('/verify-token')
  @UseGuards(JwtAuthGuard)
  async verify(@CurrentUser() user: User) {
    if (!user) {
      return new UnauthorizedException('Token is not valid.');
    } else {
      return { success: true };
    }
  }

  @Post('/authenticate-token')
  @UseGuards(JwtAuthGuard)
  async authenticate(@CurrentUser() user: User) {
    if (!user) {
      return new UnauthorizedException('Token is not valid');
    } else {
      return { success: true };
    }
  }

  @Post('/log-out')
  @UseGuards(JwtAuthGuard)
  async logout(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.logOut(user, res);
    return null;
  }
}
