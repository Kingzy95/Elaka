import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { PrismaService } from '../prisma/prisma.service';
import { DoctorService } from './doctor.service';

@Module({
  controllers: [DoctorController],
  providers: [PrismaService, DoctorService],
  exports: [DoctorService],
})
export class DoctorModule {}
