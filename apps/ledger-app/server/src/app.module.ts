import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TokenModule } from './token/token.module';
import { PrismaModule } from './prisma/prisma.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { ProductsModule } from './products/products.module';
import { RecipeModule } from './recipe/recipe.module';
import { RecipeIngredientsModule } from './recipe-ingredients/recipe-ingredients.module';
import { PrismaClient } from './prisma/client';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    TokenModule,
    PrismaModule,
    IngredientsModule,
    ProductsModule,
    RecipeModule,
    RecipeIngredientsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, PrismaClient],
})
export class AppModule {}
