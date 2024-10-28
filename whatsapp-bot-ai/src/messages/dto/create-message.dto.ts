import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  From: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  Body?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  MediaUrl0?: string;
}
