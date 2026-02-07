import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-todo-signal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-signal.html',
  styleUrl: './todo-signal.css',
})
export class TodoSignal {
  // 1) signal to maintain array
  todos = signal<Todo[]>([
    { id: 1, title: 'Complete Angular Signals Assignment', isCompleted: false },
    { id: 2, title: 'Revise RxJS BehaviorSubject', isCompleted: true },
    { id: 3, title: 'Practice @for and @if', isCompleted: false },
  ]);

  newTitle = '';
  private nextId = 4;

  // 2) computed signals
  completedToDos = computed(() => this.todos().filter(t => t.isCompleted));
  remainingToDos = computed(() => this.todos().filter(t => !t.isCompleted));

  addTodo() {
    const title = this.newTitle.trim();
    if (!title) return;

    this.todos.update(list => [
      ...list,
      { id: this.nextId++, title, isCompleted: false },
    ]);

    this.newTitle = '';
  }
  toggleTodo(id: number) {
    this.todos.update(list =>
      list.map(t => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t))
    );
  }
  deleteTodo(id: number) {
    this.todos.update(list => list.filter(t => t.id !== id));
  }
}