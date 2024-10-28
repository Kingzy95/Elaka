import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Twilio } from 'twilio';

@Injectable()
export class TwilioService {
  private client: Twilio;
  private readonly from: string;

  constructor(private configService: ConfigService) {
    const accountSid = this.configService.get<string>('TWILIO_ACCOUNT_SID');
    const authToken = this.configService.get<string>('TWILIO_AUTH_TOKEN');
    this.client = new Twilio(accountSid, authToken);
    this.from = this.configService.get<string>('TWILIO_PHONE_NUMBER');
  }

  async sendMessage(to: string, body: string) {
    const parts = splitMessage(body, 1600); // Limite de caractères pour un message WhatsApp via Twilio

    for (const part of parts) {
      await this.client.messages.create({
        from: this.from,
        to,
        body: part,
      });
    }
  }
}

// Helper function to split long messages into paragraphs
function splitMessage(message: string, maxLength: number): string[] {
  const parts = [];
  let part = '';
  message.split(/\n\s*\n/).forEach((paragraph) => {
    // Split by paragraphs
    if (part.length + paragraph.length > maxLength) {
      parts.push(part.trim());
      part = paragraph + '\n\n';
    } else {
      part += paragraph + '\n\n';
    }
  });
  if (part.trim().length > 0) {
    parts.push(part.trim());
  }
  return parts;
}
