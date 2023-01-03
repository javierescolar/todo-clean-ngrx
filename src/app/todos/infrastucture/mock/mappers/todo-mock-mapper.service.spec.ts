import { TestBed } from '@angular/core/testing';

import { TodoMockMapperService } from './todo-mock-mapper.service';

describe('TodoMockMapperService', () => {
  let service: TodoMockMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoMockMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
