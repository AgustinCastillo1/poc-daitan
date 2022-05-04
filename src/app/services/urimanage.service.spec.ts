import { TestBed } from '@angular/core/testing';

import { URIManageService } from './urimanage.service';

describe('URIManageService', () => {
  let service: URIManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(URIManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
