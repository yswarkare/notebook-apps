import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtStrategy } from '../token/strategies/jwt.strategy';
import { UserService } from '../user/user.service';

@Module({
  controllers: [IngredientsController],
  providers: [IngredientsService, PrismaService, JwtStrategy, UserService],
})
export class IngredientsModule {}
