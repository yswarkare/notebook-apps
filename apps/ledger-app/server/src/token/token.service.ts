import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from './entity/token-payload.interface';
import { User } from '../prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  getDuration(configStr: string) {
    return this.configService.getOrThrow<string>(configStr);
  }

  createToken(user: User, duration: string, secretKey: string) {
    const expiresIn = new Date();
    expiresIn.setMilliseconds(
      expiresIn.getTime() + parseInt(this.getDuration(duration)),
    );
    const tokenPayload: TokenPayload = {
      userId: user.id,
    };
    const token = this.jwtService.sign(tokenPayload, {
      secret: this.configService.getOrThrow<string>(secretKey),
      expiresIn: `${this.getDuration(duration)}ms`,
    });
    return { token, expiresIn };
  }

  createAccessToken(user: User) {
    const { token: accessToken, expiresIn: expiresAccessToken } =
      this.createToken(
        user,
        'JWT_ACCESS_TOKEN_EXPIRATION_MS',
        'JWT_ACCESS_TOKEN_SECRET',
      );
    return { accessToken, expiresAccessToken };
  }

  createRefreshToken(user: User) {
    const { token: refreshToken, expiresIn: expiresRefreshToken } =
      this.createToken(
        user,
        'JWT_REFRESH_TOKEN_EXPIRATION_MS',
        'JWT_REFRESH_TOKEN_SECRET',
      );
    return { refreshToken, expiresRefreshToken };
  }
}
