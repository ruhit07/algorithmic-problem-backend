import { IsDefined, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { TaskStatus } from '../enum/task-status.enum';

export class TaskDto {
  @IsNumber()
  @IsDefined()
  id: number;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  description: string;

  @IsEnum(TaskStatus)
  @IsDefined()
  status: TaskStatus;
}
