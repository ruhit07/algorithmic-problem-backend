import { IsEmail, IsNumber, IsString } from 'class-validator';

export class SortedUserDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumber()
  completedTasks: number;
}
