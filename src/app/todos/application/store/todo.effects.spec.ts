import { Observable } from 'rxjs';

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { TodoRepositoy } from '../../domain/todo.repository';
import { TodoMockService } from '../../infrastucture/mock/services/todo-mock.service';
import { TodoEffects } from './todo.effects';

describe('TodoEffects', () => {
  let actions$: Observable<any>;
  let effects: TodoEffects;

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
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
