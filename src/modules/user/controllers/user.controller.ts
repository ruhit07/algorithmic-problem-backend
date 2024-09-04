import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserto, SortedUserDto, UserDto } from '../dtos';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post('sorted')
  getSortedUsers(@Body() createUserDto: CreateUserto): { sortedUsers: SortedUserDto[] } {
    // console.log(createUserDto, 'xxx');

    const result = this.usersService.sortUsers(createUserDto);

    return { sortedUsers: result };
  }
}
