import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo-dto';
import { IntegerType } from 'typeorm';
import { UpdateTodoDto } from './dto/update-todo-dto';

@Controller('todos')
export class TodosController {

    constructor(
        private todoService: TodosService
    ) { }

    @Post()
    async create(@Body() createTodoDto: CreateTodoDto) {
        const todo=await this.todoService.create(createTodoDto)
        return {"status":true,"message":"tod created.","todo":todo}
    }

    @Get()
    async findAll() {
        const todos=await this.todoService.findAll()
        return {"status":true,"message":"todo list.","todos":todos}
    }
    @Get(":id")
    async find(@Param('id', ParseIntPipe) id: number) {
        const todos=await this.todoService.find(id)
        return {"status":true,"message":"todo.","todos":todos}
    }

    @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    const updated = await this.todoService.update(id, updateTodoDto);
    return {
      status: true,
      message: 'Todo updated successfully.',
      todo: updated,
    };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.todoService.remove(id);
    return {
      status: true,
      message: 'Todo deleted successfully.',
    };
  }
}
