import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

// import { Injectable, OnModuleInit } from '@nestjs/common';
// import * as pClient from '@prisma/client';

// // const pClient = async () => await import('@prisma/client').then((res) => res);

// @Injectable()
// export class PrismaService implements OnModuleInit {
//   client: any;
//   async onModuleInit() {
//     this.client = new pClient.PrismaClient();
//     await this.client;
//   }
// }
