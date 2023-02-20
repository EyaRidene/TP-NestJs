import { TodoStatusEnum } from '../enums/TodoStatus.enum';

export class UpdateTodoDto {
  name: string;
  description: string;
  status: TodoStatusEnum;
}
