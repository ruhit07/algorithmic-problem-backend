import { IsString, IsArray, IsEmail, IsNumber, IsNotEmpty, IsDefined, ArrayNotEmpty } from 'class-validator';
import { TaskDto } from './task.dto';

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
  @IsDefined()
  tasks: TaskDto[];
}
