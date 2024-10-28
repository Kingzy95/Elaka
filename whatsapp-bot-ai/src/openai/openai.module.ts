import { Module } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { DoctorService } from '../doctor/doctor.service';

@Module({
  exports: [OpenaiService],
  providers: [OpenaiService, DoctorService],
})
export class OpenaiModule {}
