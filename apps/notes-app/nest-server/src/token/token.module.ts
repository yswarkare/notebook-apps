import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { UserService } from '../user/user.service';
import { AuthService } from '../auth/auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { PrismaModule } from '../prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UserModule, JwtModule, PassportModule, PrismaModule, ConfigModule],
  providers: [
    TokenService,
    UserService,
    AuthService,
    ConfigService,
    JwtService,
  ],
  exports: [TokenService],
})
export class TokenModule {}
