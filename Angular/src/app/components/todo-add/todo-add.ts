import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'app-todo-add',
  imports: [],
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.css',
})
export class TodoAdd {
   todoService = inject(TodoService);

  addMyTodo(todoValue: string) {
    const newTodoObj = { value: todoValue }
    this.todoService.addNewTodo(newTodoObj);
  }
}
