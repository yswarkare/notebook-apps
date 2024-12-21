import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { UserModule } from '../user/user.module';
import { TokenService } from '../token/token.service';
import { ConfigService } from '@nestjs/config';
import { LocalStrategy } from '../token/strategies/local.strategy';
import { JwtRefreshStrategy } from '../token/strategies/jwt-refresh.strategy';
import { TokenModule } from '../token/token.module';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UserModule, PrismaModule, JwtModule, PassportModule, TokenModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    LocalStrategy,
    JwtRefreshStrategy,
    TokenService,
    ConfigService,
  ],
})
export class AuthModule {}
