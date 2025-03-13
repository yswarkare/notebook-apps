import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtStrategy } from '../token/strategies/jwt.strategy';
import { UserService } from '../user/user.service';

@Module({
  controllers: [RecipeController],
  providers: [RecipeService, PrismaService, JwtStrategy, UserService],
})
export class RecipeModule {}
