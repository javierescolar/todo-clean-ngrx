import { Observable } from 'rxjs';

import { Todo } from './todo';

export abstract class TodoRepositoy {
  abstract find(): Observable<Todo[]>;
  abstract create(description: string): Observable<Todo>;
  abstract update(id: number, dto: Partial<Todo>): Observable<Todo>;
  abstract delete(id: number): Observable<void>;
}
