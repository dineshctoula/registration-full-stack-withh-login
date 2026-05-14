import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
// database sabai module le use garna pauxa 
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}