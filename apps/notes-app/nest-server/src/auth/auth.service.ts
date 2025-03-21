import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { UserService } from '../user/user.service';
import { CreateUserDto, UserRole } from '../user/dto/create-user.dto';
import { compare } from 'bcryptjs';
import { User } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { TokenService } from '../token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
    private readonly tokenService: TokenService,
  ) {}

  async verifyUser(username: string, password: string): Promise<User> {
    try {
      const user =
        await this.userService.findByUsernameOrEmailOrPhone(username);
      const authenticated = await compare(password, user.password);
      if (!authenticated) throw new UnauthorizedException();
      return user;
    } catch (err) {
      console.log(err);
      throw new UnauthorizedException();
    }
  }

  async register(user: SignUpDto, res: Response) {
    const newUser: CreateUserDto = { ...user, role: UserRole.USER };
    const savedUser = await this.userService.create(newUser);
    await this.login(savedUser, res);
  }

  async login(user: User, res: Response) {
    const { accessToken, expiresAccessToken } =
      this.tokenService.createAccessToken(user);
    const { refreshToken, expiresRefreshToken } =
      this.tokenService.createRefreshToken(user);

    await this.userService.saveRefreshToken(user, refreshToken);

    res.cookie('Authentication', accessToken, {
      httpOnly: true,
      secure: this.configService.get('NODE_ENV') === 'production',
      expires: expiresAccessToken,
    });

    res.cookie('Refresh', refreshToken, {
      httpOnly: true,
      secure: this.configService.get('NODE_ENV') === 'production',
      expires: expiresRefreshToken,
    });
  }

  async logOut(user: User, res: Response) {
    await this.userService.removeRefreshToken(user);

    const expiresIn = new Date();
    expiresIn.setMilliseconds(expiresIn.getTime() + 1200000);

    res.cookie('Authentication', '', {
      httpOnly: true,
      secure: this.configService.get('NODE_ENV') === 'production',
      expires: expiresIn,
    });

    res.cookie('Refresh', '', {
      httpOnly: true,
      secure: this.configService.get('NODE_ENV') === 'production',
      expires: expiresIn,
    });
  }
}
