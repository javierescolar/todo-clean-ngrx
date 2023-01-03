import { Injectable } from '@angular/core';
import { Mapper } from '@clean/mapper';

import { Todo } from '../../../domain/todo';
import { TodoMock } from '../todo-mock';

@Injectable({
  providedIn: 'root',
})
export class TodoMockMapperService implements Mapper<TodoMock, Todo> {
  mapFrom(input: TodoMock): Todo {
    return {
      id: input.identificador,
      description: input.descripcion,
      completed: input.realizada,
    };
  }
  mapTo(input: Todo): TodoMock {
    return {
      identificador: input.id,
      descripcion: input.description,
      realizada: input.completed,
    } as TodoMock;
  }
}
