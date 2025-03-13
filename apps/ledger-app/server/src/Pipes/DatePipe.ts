import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

export class UsernamePipe implements PipeTransform<string> {
  transform(username: string, metadata: ArgumentMetadata) {
    if (!username.match(/^[a-zA-Z0-9_]+$/)) {
      throw new BadRequestException('Invalid username');
    }
    return username;
  }
}
