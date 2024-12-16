import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import bcrypt from 'bcryptjs';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { password, ...newUser } = createUserDto;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const hashedPassword = hash.toString();
    return await this.prisma.user.create({
      data: {
        password: hashedPassword,
        ...newUser,
      },
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  async findByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findOne(id: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async findByUsernameOrEmailOrPhone(username: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [
          { username: username },
          { email: username },
          { phoneNumber: username },
        ],
      },
    });
    if (!user) throw new NotFoundException('User not found!');
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
