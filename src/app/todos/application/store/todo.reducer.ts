import { createEntityAdapter, EntityAdapter, EntityState, Update } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Todo } from '../../domain/todo';
import * as TodoActions from './todo.actions';

export const todosFeatureKey = 'todos';

export interface TodoState extends EntityState<Todo> {
  // additional entities state properties
  loading: boolean;
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: TodoState = adapter.getInitialState({
  // additional entity state properties
  loading: false,
});

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.loadTodos, (state) => ({ ...state, loading: true })),
  on(TodoActions.loadedTodos, (state, action) =>
    adapter.setAll(action.todos, { ...state, loading: false })
  ),
  on(TodoActions.addTodo, (state) => ({ ...state, loading: true })),
  on(TodoActions.addedTodo, (state, action) =>
    adapter.addOne(action.todo, { ...state, loading: false })
  ),
  on(TodoActions.updateTodo, (state) => ({ ...state, loading: true })),
  on(TodoActions.updatedTodo, (state, action) => {
    console.log(action.todo);
    const updateObj: Update<Todo> = {
      id: action.todo.id,
      changes: action.todo,
    };
    return adapter.updateOne(updateObj, { ...state, loading: false });
  }),
  on(TodoActions.deleteTodo, (state) => ({ ...state, loading: true })),
  on(TodoActions.deletedTodo, (state, action) =>
    adapter.removeOne(action.id, { ...state, loading: false })
  )
);
