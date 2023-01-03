import { TestBed } from '@angular/core/testing';

import { TODO_MOCK_DATA } from '../todo-mock.data';
import { TodoMockService } from './todo-mock.service';

describe('TodoMockService', () => {
  let service: TodoMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('method find should returned array with same length', (done: DoneFn) => {
    service.find().subscribe((result) => {
      expect(result.length).toEqual(TODO_MOCK_DATA.length);
      done();
    });
  });
});
