import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { LogInDto } from './dto/log-in.dto';
import { UserService } from '../user/user.service';
import { CreateUserDto, UserRole } from '../user/dto/create-user.dto';
import { compare } from 'bcryptjs';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async verifyUser(username: string, password: string): Promise<User> {
    try {
      const user =
        await this.userService.findByUsernameOrEmailOrPhone(username);
      const authenticated = await compare(password, user.password);
      if (!authenticated) throw new UnauthorizedException();
      return user;
    } catch (err) {
      console.log(err);
      throw new UnauthorizedException();
    }
  }

  async register(user: SignUpDto) {
    const newUser: CreateUserDto = { ...user, role: UserRole.USER };
    return await this.userService.create(newUser);
  }

  async login(user: LogInDto) {
    const savedUser = await this.userService.findByUsernameOrEmailOrPhone(
      user.username,
    );
    let isMatch = await compare(user.password, savedUser.password);
    return `This action updates a auth`;
  }
}
