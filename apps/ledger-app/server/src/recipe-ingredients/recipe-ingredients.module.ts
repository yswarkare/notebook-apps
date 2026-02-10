import { Module } from '@nestjs/common';
import { RecipeIngredientsService } from './recipe-ingredients.service';
import { RecipeIngredientsController } from './recipe-ingredients.controller';
import { UserService } from '../user/user.service';
import { JwtStrategy } from '../token/strategies/jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [RecipeIngredientsController],
  providers: [
    RecipeIngredientsService,
    PrismaService,
    JwtStrategy,
    UserService,
  ],
})
export class RecipeIngredientsModule {}
