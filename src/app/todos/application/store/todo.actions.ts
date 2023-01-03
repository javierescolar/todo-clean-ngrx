import { createAction, props } from '@ngrx/store';

import { Todo } from '../../domain/todo';
import { CreateTodo } from '../dtos/createTodo';

export const loadTodos = createAction('[Todo/API] Load Todos');

export const loadedTodos = createAction(
  '[Todo/API] Loaded Todos',
  props<{ todos: Todo[] }>()
);

export const addTodo = createAction(
  '[Todo/API] Add Todo',
  props<{ dto: CreateTodo }>()
);

export const addedTodo = createAction(
  '[Todo/API] Added Todo',
  props<{ todo: Todo }>()
);

export const updateTodo = createAction(
  '[Todo/API] Update Todo',
  props<{ id: number; todo: Partial<Todo> }>()
);

export const updatedTodo = createAction(
  '[Todo/API] Updated Todo',
  props<{ todo: Todo }>()
);

export const deleteTodo = createAction(
  '[Todo/API] Delete Todo',
  props<{ id: number }>()
);

export const deletedTodo = createAction(
  '[Todo/API] Deleted Todo',
  props<{ id: number }>()
);

export const clearTodos = createAction('[Todo/API] Clear Todos');
