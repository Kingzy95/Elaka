// import { Injectable } from '@nestjs/common';
// import { protos, SpeechClient } from '@google-cloud/speech';
// import axios from 'axios';
// import * as path from 'path';
//
// @Injectable()
// export class ConvertVoiceNoteService {
//   private client: SpeechClient;
//
//   constructor() {
//     this.client = new SpeechClient({
//       keyFilename: path.join(__dirname, '../../config/ekolo-beta.json'),
//     });
//   }
//
//   async transcribeVoiceNote(mediaUrl: string): Promise<string> {
//     const audioData = await this.downloadAudio(mediaUrl);
//
//     const audio: protos.google.cloud.speech.v1.IRecognitionAudio = {
//       content: audioData.toString('base64'),
//     };
//
//     const config: protos.google.cloud.speech.v1.IRecognitionConfig = {
//       encoding:
//         protos.google.cloud.speech.v1.RecognitionConfig.AudioEncoding.LINEAR16,
//       sampleRateHertz: 16000,
//       languageCode: 'fr-FR',
//       // Ajout des propriétés supplémentaires nécessaires
//       audioChannelCount: 1,
//       enableSeparateRecognitionPerChannel: false,
//       maxAlternatives: 1,
//       profanityFilter: false,
//       enableWordTimeOffsets: false,
//       enableAutomaticPunctuation: true,
//       diarizationConfig: {
//         enableSpeakerDiarization: false,
//       },
//       metadata: {},
//       model: '',
//       useEnhanced: false,
//     };
//
//     const request: protos.google.cloud.speech.v1.IRecognizeRequest = {
//       audio: audio,
//       config: config,
//     };
//
//     const [response] = await this.client.recognize(request);
//     return response.results
//       .map(
//         (result: protos.google.cloud.speech.v1.ISpeechRecognitionResult) =>
//           result.alternatives[0].transcript,
//       )
//       .join('\n');
//   }
//
//   private async downloadAudio(url: string): Promise<Buffer> {
//     const response = await axios.get(url, { responseType: 'arraybuffer' });
//     return Buffer.from(response.data, 'binary');
//   }
// }

import { Injectable } from '@nestjs/common';
import { protos, SpeechClient } from '@google-cloud/speech';
import axios from 'axios';
import * as path from 'path';

@Injectable()
export class ConvertVoiceNoteService {
  private client: SpeechClient;

  constructor() {
    this.client = new SpeechClient({
      keyFilename: path.join(__dirname, '../../config/ekolo-beta.json'),
    });
  }

  async transcribeVoiceNote(mediaUrl: string): Promise<string> {
    const audioData = await this.downloadAudio(mediaUrl);

    const audio: protos.google.cloud.speech.v1.IRecognitionAudio = {
      content: audioData.toString('base64'),
    };

    const config: protos.google.cloud.speech.v1.IRecognitionConfig = {
      encoding:
        protos.google.cloud.speech.v1.RecognitionConfig.AudioEncoding.OGG_OPUS,
      sampleRateHertz: 16000,
      languageCode: 'fr-FR',
    };

    const request: protos.google.cloud.speech.v1.IRecognizeRequest = {
      audio: audio,
      config: config,
    };

    const [response] = await this.client.recognize(request);
    return response.results
      .map(
        (result: protos.google.cloud.speech.v1.ISpeechRecognitionResult) =>
          result.alternatives[0].transcript,
      )
      .join('\n');
  }

  private async downloadAudio(url: string): Promise<Buffer> {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      auth: {
        username: process.env.TWILIO_ACCOUNT_SID,
        password: process.env.TWILIO_AUTH_TOKEN,
      },
    });
    return Buffer.from(response.data, 'binary');
  }
}
