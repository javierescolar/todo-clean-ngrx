import { createFeatureSelector, createSelector } from '@ngrx/store';

import { adapter, todosFeatureKey, TodoState } from './todo.reducer';

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

const todosState = createFeatureSelector<TodoState>(todosFeatureKey);

export const selectAllTodos = createSelector(todosState, selectAll);
export const loadingTodos = createSelector(
  todosState,
  (state) => state.loading
);
