import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TodoModel } from './models/todo.model';
import { UpdateTodoDto } from './dtos/UpdateTodo.dto';
import { AddTodoDto } from './dtos/AddTodo.dto';
import { TodoStatusEnum } from './enums/TodoStatus.enum';
import { Provide_Tokens } from '../common/common.module';

@Injectable()
export class TodoService {
  @Inject(Provide_Tokens.uuid) uuid: () => number;
  todos: TodoModel[] = [];
  getAll(): TodoModel[] {
    return this.todos;
  }
  getTodoById(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new NotFoundException('Todo with this id not found');
    } else {
      return todo;
    }
  }
  updateTodoById(id: number, newTodo: UpdateTodoDto) {
    const todo = this.getTodoById(id);
    if (newTodo.name) todo.name = newTodo.name;
    if (newTodo.description) todo.description = newTodo.description;
    if (newTodo.status) todo.status = newTodo.status;
    return todo;
  }
  addTodo(todo: AddTodoDto): TodoModel {
    const newTodo: TodoModel = {
      id: this.uuid(),
      name: todo.name,
      description: todo.description,
      createdAt: new Date(),
      status: TodoStatusEnum.EnAttente,
    };
    this.todos.push(newTodo);
    return this.todos[this.todos.length - 1];
  }
  deleteTodo(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new NotFoundException('Todo with this id not found');
    }
    return (this.todos = this.todos.filter((todo) => todo.id === id));
  }
}
