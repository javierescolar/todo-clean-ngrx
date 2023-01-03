import { Observable, of } from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { Todo } from '../../domain/todo';
import { TodoRepositoy } from '../../domain/todo.repository';
import { TodoMockService } from '../../infrastucture/mock/services/todo-mock.service';
import { loadedTodos, loadTodos } from './todo.actions';
import { TodoEffects } from './todo.effects';

describe('TodoEffects', () => {
  let actions$: Observable<any>;
  let effects: TodoEffects;
  let service: TodoRepositoy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoEffects,
        provideMockActions(() => actions$),
        {
          provide: TodoRepositoy,
          useClass: TodoMockService,
        },
      ],
    });

    effects = TestBed.inject(TodoEffects);
    service = TestBed.inject(TodoRepositoy);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('loadTodos$', (done: DoneFn) => {
    const fakeValue: Todo[] = [
      { id: 1, description: 'text1', completed: false },
    ];
    const spy = spyOn(service, 'find').and.returnValue(of(fakeValue));
    actions$ = of(loadTodos());
    effects.loadTodos$.subscribe((result) => {
      expect(result).toEqual(loadedTodos({ todos: fakeValue }));
      expect(spy).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
