import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { SetAvailabilityDto } from './dto/set-availability.dto';

@Injectable()
export class DoctorService {
  constructor(private readonly prisma: PrismaService) {}

  async createDoctor(data: CreateDoctorDto) {
    return this.prisma.doctor.create({
      data,
    });
  }

  async getDoctors() {
    return this.prisma.doctor.findMany();
  }

  async getDoctorById(doctorId: number) {
    return this.prisma.doctor.findUnique({
      where: {
        id: doctorId,
      },
    });
  }

  async setAvailability(
    doctorId: number,
    availability: Omit<SetAvailabilityDto, 'doctorId'>,
  ) {
    return this.prisma.availability.create({
      data: {
        doctorId,
        ...availability,
      },
    });
  }

  async getAvailableDoctors(specialty: string, dayOfWeek: string) {
    return this.prisma.doctor.findMany({
      where: {
        specialty,
        availabilities: {
          some: {
            dayOfWeek,
          },
        },
      },
      include: {
        availabilities: true,
      },
    });
  }
}
