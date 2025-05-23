import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo-dto';
import { IntegerType, Repository } from 'typeorm';
import { Todo } from './entites/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateTodoDto } from './dto/update-todo-dto';

@Injectable()
export class TodosService {
    constructor(
        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>

    ) { }

    create(createTodDto: CreateTodoDto) {
        let todo = this.todoRepository.create(createTodDto);
        return this.todoRepository.save(todo);
    }

    findAll() {
        return this.todoRepository.find()
    }

    async find(id: number): Promise<Todo> {
        const todo = await this.todoRepository.findOneBy({ id });
        if (!todo) {
            throw new NotFoundException(`Todo with ID ${id} not found`);
        }
        return todo;
    }

    async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
        const todo = await this.find(id);
        Object.assign(todo, updateTodoDto);
        return this.todoRepository.save(todo);
    }

    async remove(id: number): Promise<void> {
        const todo = await this.find(id);
        await this.todoRepository.remove(todo);
    }
}
