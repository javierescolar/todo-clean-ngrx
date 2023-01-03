import { AppState } from 'src/app/app.state';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadTodos } from '../application/store/todo.actions';
import { loadingTodos, selectAllTodos } from '../application/store/todo.selectors';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$ = this.store.select(selectAllTodos);
  loading$ = this.store.select(loadingTodos);

  constructor(private readonly store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }
}
