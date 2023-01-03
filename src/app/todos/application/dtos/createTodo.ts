import { Todo } from '../../domain/todo';

export interface CreateTodo extends Pick<Todo, 'description'> {}
