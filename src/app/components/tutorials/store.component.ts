import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { loadTodos, updateTodo } from '../../stores/actions';
import { loadingSelector, todosSelector } from '../../stores/selectors';
import { AppState } from '../../stores/store';
import { Todo } from '../../stores/todo.model';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  template: `
    <h2>NGRX store works!: {{ isLoading() ? "Loading...." : "Loaded." }}</h2>
    @for (todo of todos(); track todo) {
    <div>
      <h4>{{ todo.id }}</h4>
      <div>{{ todo.description }}</div>
      <div>{{ todo.completed }}</div>
      @if( todo.completed){
      <button (click)="markComplete(todo)">mark completed</button>
      }@else {
      <button (click)="markComplete(todo)">mark uncompleted</button>
      }
    </div>
    }
  `,
})
export class StoreComponent implements OnInit {
  store = inject(Store<AppState>);
  todos = toSignal(this.store.select(todosSelector));
  isLoading = toSignal(this.store.select(loadingSelector));

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.store.dispatch(loadTodos());
  }

  markComplete(todo: Todo) {
    this.store.dispatch(
      updateTodo({ todo: { ...todo, completed: !todo.completed } })
    );
  }
}
