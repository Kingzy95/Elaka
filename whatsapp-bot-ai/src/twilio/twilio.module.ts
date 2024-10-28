import { Module } from '@nestjs/common';
import { TwilioService } from './twilio.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [TwilioService, ConfigService],
  exports: [TwilioService],
})
export class TwilioModule {}
