import { delay, map, Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

import { Todo } from '../../../domain/todo';
import { TodoRepositoy } from '../../../domain/todo.repository';
import { TodoMockMapperService } from '../mappers/todo-mock-mapper.service';
import { TodoMock } from '../todo-mock';
import { TODO_MOCK_DATA } from '../todo-mock.data';

@Injectable({
  providedIn: 'root',
})
export class TodoMockService extends TodoRepositoy {
  private mockData = TODO_MOCK_DATA;

  constructor(private readonly mapper: TodoMockMapperService) {
    super();
  }
  find(): Observable<Todo[]> {
    return of(this.mockData).pipe(
      delay(1500),
      map((todos) => todos.map(this.mapper.mapFrom))
    );
  }

  create(description: string): Observable<Todo> {
    const newId = this.mockData.length + 1;
    const newTodo = {
      identificador: newId,
      descripcion: description,
      realizada: false,
      otraPropiedadQueNoQuiero: null,
    };
    this.mockData.push(newTodo);
    return of(newTodo).pipe(
      delay(1500),
      map((todo) => this.mapper.mapFrom(todo))
    );
  }

  update(id: number, dto: Partial<Todo>): Observable<Todo> {
    const mockFinded = this.mockData.find((m) => m.identificador === id);
    const mockUpdated = {
      ...mockFinded,
      ...this.mapper.mapTo(dto as Todo),
    } as TodoMock;
    this.mockData.filter((m) => m.identificador !== id).push(mockUpdated);
    return of(mockUpdated).pipe(
      delay(1500),
      map((todo) => this.mapper.mapFrom(todo))
    );
  }
  delete(id: number): Observable<void> {
    this.mockData = this.mockData.filter((m) => m.identificador !== id);
    return of(void 0).pipe(delay(1500));
  }
}
