import { ArrayNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDto } from './user.dto';

export class CreateUserto {
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => UserDto)
  @ValidateNested({ each: true })
  users: UserDto[];
}
