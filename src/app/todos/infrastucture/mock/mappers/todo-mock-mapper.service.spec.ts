import { Todo } from 'src/app/todos/domain/todo';

import { TestBed } from '@angular/core/testing';

import { TodoMock } from '../todo-mock';
import { TodoMockMapperService } from './todo-mock-mapper.service';

describe('TodoMockMapperService', () => {
  const mockTodo: TodoMock = {
    identificador: 1,
    descripcion: 'text',
    realizada: false,
    otraPropiedadQueNoQuiero: null,
  };
  const todo: Todo = {
    id: 1,
    description: 'text',
    completed: false,
  };
  let service: TodoMockMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoMockMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('mapFrom should returned object Todo', () => {
    const objectMapped = service.mapFrom(mockTodo);
    expect(objectMapped).toEqual(todo);
  });

  it('mapTo should returned object MockTodo', () => {
    const objectMapped = service.mapTo(todo);
    objectMapped.otraPropiedadQueNoQuiero = mockTodo.otraPropiedadQueNoQuiero;
    expect(objectMapped).toEqual(mockTodo);
  });
});
