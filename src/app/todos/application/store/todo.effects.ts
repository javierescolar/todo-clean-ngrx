import { catchError, EMPTY, map, mergeMap } from 'rxjs';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { TodoRepositoy } from '../../domain/todo.repository';
import * as TodoActions from './todo.actions';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private readonly repository: TodoRepositoy
  ) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      mergeMap(() =>
        this.repository.find().pipe(
          map((todos) => TodoActions.loadedTodos({ todos })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addTodo),
      mergeMap((payload) =>
        this.repository.create(payload.dto.description).pipe(
          map((todo) => TodoActions.addedTodo({ todo })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.updateTodo),
      mergeMap((payload) =>
        this.repository.update(payload.id, payload.todo).pipe(
          map((todo) => TodoActions.updatedTodo({ todo })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.deleteTodo),
      mergeMap((payload) =>
        this.repository.delete(payload.id).pipe(
          map(() => TodoActions.deletedTodo({ id: payload.id })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
