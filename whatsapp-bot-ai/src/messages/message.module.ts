import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { TwilioService } from '../twilio/twilio.service';
import { OpenaiService } from '../openai/openai.service';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { ConvertVoiceNoteService } from '../shared/convert-voice-note.service';
import { DoctorService } from '../doctor/doctor.service';

@Module({
  controllers: [MessagesController],
  providers: [
    TwilioService,
    OpenaiService,
    PrismaService,
    ConfigService,
    ConvertVoiceNoteService,
    DoctorService,
  ],
})
export class MessagesModule {}
