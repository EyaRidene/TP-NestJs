import { TodoStatusEnum } from '../enums/TodoStatus.enum';

export class TodoModel {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  status: TodoStatusEnum;
}
