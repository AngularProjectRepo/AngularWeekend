import { TestBed, inject } from '@angular/core/testing';

import { StockCallServiceService } from './stock-call-service.service';

describe('StockCallServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockCallServiceService]
    });
  });

  it('should be created', inject([StockCallServiceService], (service: StockCallServiceService) => {
    expect(service).toBeTruthy();
  }));
});
