import {
  IsString,
  IsArray,
  IsEmail,
  IsNumber,
  IsDefined,
  ArrayNotEmpty,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { TaskDto } from './task.dto';
import { Type } from 'class-transformer';

export class UserDto {
  @IsNumber()
  @IsDefined()
  id: number;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  name: string;

  @IsEmail()
  @IsDefined()
  email: string;

  @IsArray()
  @ArrayNotEmpty()
  @Type(() => TaskDto)
  @ValidateNested({ each: true })
  tasks: TaskDto[];
}
