import { Injectable, Logger } from '@nestjs/common';
import { OpenAI } from 'openai';
import { DoctorService } from '../doctor/doctor.service';

@Injectable()
export class OpenaiService {
  private openai: OpenAI;
  private readonly logger = new Logger(OpenaiService.name);

  constructor(private readonly doctorService: DoctorService) {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateResponse(userMessage: string): Promise<string> {
    const prompt = `
    Vous vous appelez Lucie M. et êtes un assistant IA spécialisé dans la santé. Vos principales fonctions sont de gérer les questions de santé et d'aider à planifier des rendez-vous médicaux. Répondez aux questions de manière concise et pertinente sans fournir d'informations supplémentaires sur votre rôle. Si on vous demande de planifier un rendez-vous, demandez les détails nécessaires pour le faire.
    Si vous ne pouvez pas répondre à une question, dites simplement que vous ne pouvez pas répondre à cette question.
    Si quelqu'un vous demande de parler d'autre chose, dites : Mon role est de vous accompagnez dans vos questions de santé.
    Ne parlez que de sujets liés à la santé.
    Commencez par dire si et seulement si c'est une nouvelle conversation sinon passez a l'essentiel: Bonjour, je suis Lucie de Elaka. Comment puis-je vous aider aujourd'hui ?

    Message de l'utilisateur : ${userMessage}
    `;

    try {
      const response = await this.openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 150,
      });
      return response.choices[0].message.content.trim();
    } catch (error) {
      if (error.response && error.response.status === 429) {
        this.logger.error(
          "Quota dépassé pour l'API OpenAI. Veuillez vérifier votre plan et vos détails de facturation.",
        );
        return 'Désolé, nous rencontrons une forte demande. Veuillez réessayer plus tard.';
      } else {
        this.logger.error(
          "Une erreur est survenue lors de la génération d'une réponse depuis OpenAI :",
          error.message,
        );
        return 'Désolé, quelque chose a mal tourné. Veuillez réessayer plus tard.';
      }
    }
  }

  async getAvailableDoctorsForDate(
    specialty: string,
    dayOfWeek: string,
  ): Promise<string> {
    const doctors = await this.doctorService.getAvailableDoctors(
      specialty,
      dayOfWeek,
    );
    if (doctors.length === 0) {
      return 'Aucun médecin disponible pour cette spécialité et ce jour.';
    }

    return doctors
      .map(
        (doc) =>
          `Dr. ${doc.name}, spécialiste en ${doc.specialty}, disponible de ${doc.availabilities[0].startTime} à ${doc.availabilities[0].endTime}.`,
      )
      .join('\n');
  }
}
