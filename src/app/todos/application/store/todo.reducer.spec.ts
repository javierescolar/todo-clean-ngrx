import { initialState, todoReducer } from './todo.reducer';

describe('Todo Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = todoReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
