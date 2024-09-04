import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { SortedUserDto, UserDto } from '../dtos';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post('sorted')
  getSortedUsers(@Body() createUsersDto: { users: UserDto[] }): { sortedUsers: SortedUserDto[] } {
    const result = this.usersService.sortUsers(createUsersDto.users);

    return { sortedUsers: result };
  }
}
