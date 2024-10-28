import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { SetAvailabilityDto } from './dto/set-availability.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('doctors')
@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  async createDoctor(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.createDoctor(createDoctorDto);
  }

  @Get()
  async getDoctors() {
    return this.doctorService.getDoctors();
  }

  @Post('availability')
  async setAvailability(@Body() setAvailabilityDto: SetAvailabilityDto) {
    const { doctorId, ...availability } = setAvailabilityDto;
    return this.doctorService.setAvailability(doctorId, availability);
  }

  @Get('available')
  async getAvailableDoctors(
    @Query('specialty') specialty: string,
    @Query('dayOfWeek') dayOfWeek: string,
  ) {
    return this.doctorService.getAvailableDoctors(specialty, dayOfWeek);
  }
}
