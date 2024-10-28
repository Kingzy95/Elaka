import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SetAvailabilityDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  doctorId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  dayOfWeek: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  startTime: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  endTime: string;
}
