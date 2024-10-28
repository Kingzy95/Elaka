// import { Controller, Post, Body } from '@nestjs/common';
// import { TwilioService } from '../twilio/twilio.service';
// import { OpenaiService } from '../openai/openai.service';
// import { PrismaService } from '../prisma/prisma.service';
// import { CreateMessageDto } from './dto/create-message.dto';
// import axios from 'axios';
// import * as FormData from 'form-data';
//
// @Controller('messages')
// export class MessagesController {
//   constructor(
//     private readonly twilioService: TwilioService,
//     private readonly openaiService: OpenaiService,
//     private readonly prismaService: PrismaService,
//   ) {}
//
//   @Post()
//   async receiveMessage(@Body() createMessageDto: CreateMessageDto) {
//     const { From, Body, MediaUrl0 } = createMessageDto;
//
//     const formattedFrom = From.startsWith('whatsapp:')
//       ? From
//       : `whatsapp:${From}`;
//     let messageBody = Body;
//
//     if (MediaUrl0) {
//       messageBody = await this.convertVoiceNoteToText(MediaUrl0);
//     }
//
//     const user = await this.prismaService.user.upsert({
//       where: { phone: formattedFrom },
//       update: {},
//       create: { phone: formattedFrom },
//     });
//
//     await this.prismaService.message.create({
//       data: {
//         from: formattedFrom,
//         body: messageBody,
//         timestamp: new Date(),
//         role: 'user',
//         userId: user.id,
//       },
//     });
//
//     const messageHistory = await this.prismaService.message.findMany({
//       where: { userId: user.id },
//       orderBy: { timestamp: 'asc' },
//     });
//
//     const history = messageHistory
//       .map(
//         (msg) =>
//           `${msg.role === 'user' ? 'Utilisateur' : 'Assistant'}: ${msg.body}`,
//       )
//       .join('\n');
//     const prompt = `
//       Vous êtes un assistant IA spécialisé dans la santé. Vos principales fonctions sont de gérer les questions de santé et d'aider à planifier des rendez-vous médicaux. Répondez aux questions de manière concise et pertinente sans fournir d'informations supplémentaires sur votre rôle.
//
//       ${history}
//
//       Utilisateur : ${messageBody}
//     `;
//
//     const aiResponse = await this.openaiService.generateResponse(prompt);
//
//     await this.prismaService.message.create({
//       data: {
//         from: 'Assistant',
//         body: aiResponse,
//         timestamp: new Date(),
//         role: 'assistant',
//         userId: user.id,
//       },
//     });
//
//     const twilioResponse = await this.twilioService.sendMessage(
//       formattedFrom,
//       aiResponse,
//     );
//     return { message: 'Message envoyé avec succès', twilioResponse };
//   }
//
//   private async convertVoiceNoteToText(mediaUrl: string): Promise<string> {
//     const form = new FormData();
//     form.append('file', mediaUrl);
//
//     try {
//       const response = await axios.post(
//         'YOUR_TRANSCRIPTION_SERVICE_URL',
//         form,
//         {
//           headers: {
//             ...form.getHeaders(),
//             Authorization: `Bearer YOUR_TRANSCRIPTION_SERVICE_API_KEY`,
//           },
//         },
//       );
//
//       return response.data.transcription;
//     } catch (error) {
//       console.error(
//         'Erreur lors de la conversion de la note vocale en texte:',
//         error,
//       );
//       return 'Erreur lors de la transcription de la note vocale.';
//     }
//   }
// }

import { Controller, Post, Body } from '@nestjs/common';
import { TwilioService } from '../twilio/twilio.service';
import { OpenaiService } from '../openai/openai.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ConvertVoiceNoteService } from '../shared/convert-voice-note.service';
import { DoctorService } from '../doctor/doctor.service';

@Controller('messages')
export class MessagesController {
  constructor(
    private readonly twilioService: TwilioService,
    private readonly openaiService: OpenaiService,
    private readonly prismaService: PrismaService,
    private readonly convertVoiceNoteService: ConvertVoiceNoteService,
    private readonly doctorService: DoctorService,
  ) {}

  @Post()
  async receiveMessage(@Body() createMessageDto: CreateMessageDto) {
    const { From, Body, MediaUrl0 } = createMessageDto;

    const formattedFrom = From.startsWith('whatsapp:')
      ? From
      : `whatsapp:${From}`;
    let messageBody = Body;

    if (MediaUrl0) {
      messageBody =
        await this.convertVoiceNoteService.transcribeVoiceNote(MediaUrl0);
    }

    if (!messageBody) {
      return {
        statusCode: 400,
        message: 'Body should not be empty',
        error: 'Bad Request',
      };
    }

    const user = await this.prismaService.user.upsert({
      where: { phone: formattedFrom },
      update: {},
      create: { phone: formattedFrom },
    });

    await this.prismaService.message.create({
      data: {
        from: formattedFrom,
        body: messageBody,
        timestamp: new Date(),
        role: 'user',
        userId: user.id,
        mediaUrl: MediaUrl0 || null,
      },
    });

    const messageHistory = await this.prismaService.message.findMany({
      where: { userId: user.id },
      orderBy: { timestamp: 'asc' },
    });

    const history = messageHistory
      .map(
        (msg) =>
          `${msg.role === 'user' ? 'Utilisateur' : 'Assistant'}: ${msg.body}`,
      )
      .join('\n');

    let prompt = `
      Vous êtes un assistant IA spécialisé dans la santé. Vos principales fonctions sont de gérer les questions de santé et d'aider à planifier des rendez-vous médicaux. Répondez aux questions de manière concise et pertinente sans fournir d'informations supplémentaires sur votre rôle.

      ${history}

      Utilisateur : ${messageBody}
    `;

    // Check if user is asking for available doctors
    const availableDoctorsPrompt =
      await this.openaiService.getAvailableDoctorsForDate(
        'généraliste',
        'lundi',
      );
    prompt += `\n\n${availableDoctorsPrompt}`;

    const aiResponse = await this.openaiService.generateResponse(prompt);

    await this.prismaService.message.create({
      data: {
        from: 'Assistant',
        body: aiResponse,
        timestamp: new Date(),
        role: 'assistant',
        userId: user.id,
      },
    });

    const twilioResponse = await this.twilioService.sendMessage(
      formattedFrom,
      aiResponse,
    );
    return { message: 'Message envoyé avec succès', twilioResponse };
  }
}
