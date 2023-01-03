import * as TodoActions from './todo.actions';
import { initialState, todoReducer } from './todo.reducer';

describe('Todo Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = todoReducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });

  it('loadTodo should change loading value to true', () => {
    const action = TodoActions.loadTodos();
    const result = todoReducer(initialState, action);
    expect(result.loading).toBeTrue();
  });

  it('loadedTodo should return array lenght to equal 1', () => {
    const action = TodoActions.loadedTodos({
      todos: [{ id: 1, description: '', completed: false }],
    });
    const result = todoReducer(initialState, action);
    expect(result.ids.length).toEqual(1);
  });
});
