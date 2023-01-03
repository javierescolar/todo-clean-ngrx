import { Type } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

import { TodoEffects } from './todos/application/store/todo.effects';
import { todoReducer, todosFeatureKey, TodoState } from './todos/application/store/todo.reducer';

export interface AppState {
  [todosFeatureKey]: TodoState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  [todosFeatureKey]: todoReducer,
};

export const ROOT_EFFECTS: Type<unknown>[] = [TodoEffects];

//export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
