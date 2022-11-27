import { TestBed } from '@angular/core/testing';

import { ListActiveService } from './list-active.service';

describe('ListActiveService', () => {
  let service: ListActiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListActiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
