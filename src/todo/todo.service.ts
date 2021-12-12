import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  private todo: Todo[]= [
    {
    id: 1,
    title: "Do Homework",
    body: "Finish project React+Nest before 12/12/2021 23h59"
  },
  {
    id: 2,
    title: "Cleaning the kitchen",
    body: "Clean floors, wash dishes"
  },
  {
    id: 3,
    title: "Do the groceries",
    body: "Check the groceries in the nav menu"
  }
];

  create(createTodoDto: CreateTodoDto): Todo{
    const nextId= (this.todo.length == 0? 0 : this.todo[this.todo.length-1].id +1);
    const newTodo={id: nextId, ...createTodoDto};
    this.todo.push(newTodo);
    return newTodo;
  }

  findAll(): Todo[] {
    return this.todo;
  }

  
  findOne(id: number): Todo{
    return this.todo.find((task) => task.id === id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
