import { AppState } from 'src/app/app.state';

import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { deleteTodo, updateTodo } from '../../application/store/todo.actions';
import { Todo } from '../../domain/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo!: Todo;
  constructor(private readonly store: Store<AppState>) {}

  remove(): void {
    this.store.dispatch(deleteTodo({ id: this.todo.id }));
  }

  update(): void {
    const id = this.todo.id;
    const todo = { ...this.todo, completed: !this.todo.completed } as Todo;
    this.store.dispatch(
      updateTodo({
        id,
        todo,
      })
    );
  }
}
