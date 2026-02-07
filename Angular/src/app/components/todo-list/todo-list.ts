import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  todoService = inject(TodoService);
  todoList$!: Observable<any>;

  ngOnInit(){
    this.todoList$ = this.todoService.todoObs;
    console.log(this.todoList$)
  }
  deleteMyTodo(id: any){
    this.todoService.deleteToDo(id);
  }
}
