import { TestBed } from '@angular/core/testing';

import { NgxHeaderService } from './ngx-header.service';

describe('NgxHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxHeaderService = TestBed.get(NgxHeaderService);
    expect(service).toBeTruthy();
  });
});
