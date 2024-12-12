import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { LogInDto } from './dto/log-in.dto';

@Injectable()
export class AuthService {
  register(user: SignUpDto) {
    return 'This action adds a new auth';
  }

  login(id: number, user: LogInDto) {
    return `This action updates a #${id} auth`;
  }
}
