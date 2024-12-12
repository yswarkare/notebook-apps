import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { LogInDto } from './dto/log-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: SignUpDto) {
    return this.authService.register(createAuthDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: LogInDto) {
    return this.authService.login(+id, updateAuthDto);
  }
}
