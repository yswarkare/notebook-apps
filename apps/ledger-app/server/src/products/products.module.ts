import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtStrategy } from '../token/strategies/jwt.strategy';
import { UserService } from '../user/user.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService, JwtStrategy, UserService],
})
export class ProductsModule {}
