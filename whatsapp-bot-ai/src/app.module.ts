import { Module } from '@nestjs/common';
import { TwilioModule } from './twilio/twilio.module';
import { OpenaiModule } from './openai/openai.module';
import { PrismaModule } from './prisma/prisma.module';
import { MessagesModule } from './messages/message.module';
import { ConfigModule } from '@nestjs/config';
import { DoctorModule } from './doctor/doctor.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MessagesModule,
    TwilioModule,
    OpenaiModule,
    PrismaModule,
    DoctorModule,
  ],
})
export class AppModule {}
