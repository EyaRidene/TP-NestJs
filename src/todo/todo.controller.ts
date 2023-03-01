import { Body, Controller, Param, Patch } from '@nestjs/common';
import { Delete, Get, Post } from '@nestjs/common/decorators';
import { TodoService } from './todo.service';
import { TodoModel } from './models/todo.model';
import { AddTodoDto } from './dtos/AddTodo.dto';
import { UpdateTodoDto } from './dtos/UpdateTodo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos(): TodoModel[] {
    return this.todoService.getAll();
  }

  @Get(':id')
  getTodoById(@Param('id') id: number): TodoModel {
    return this.todoService.getTodoById(id);
  }

  @Post()
  addTodo(@Body() todo: AddTodoDto): TodoModel {
    return this.todoService.addTodo(todo);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number) {
    return this.todoService.deleteTodo(id);
  }

  @Patch(':id')
  updateTodo(@Param('id') id: number, @Body() newTodo: UpdateTodoDto) {
    return this.todoService.updateTodoById(id, newTodo);
  }
}
