import { Injectable } from '@nestjs/common';
import { CreateUserto, SortedUserDto, UserDto } from '../dtos';
import { TaskStatus } from '../enum/task-status.enum';

@Injectable()
export class UserService {
  sortUsers(createUserto: CreateUserto): SortedUserDto[] {
    return createUserto.users
      .map((user) => {
        const completedTasks = user.tasks.reduce(
          (count, task) => count + (task.status === TaskStatus.COMPLETE ? 1 : 0),
          0,
        );
        return { id: user.id, name: user.name, email: user.email, completedTasks };
      })
      .sort((a, b) => {
        if (b.completedTasks === a.completedTasks) {
          return a.name.localeCompare(b.name);
        }
        return b.completedTasks - a.completedTasks;
      });
  }
}
