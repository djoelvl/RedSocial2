import { TestBed } from '@angular/core/testing';

import { MuroamigoService } from './muroamigo.service';

describe('MuroamigoService', () => {
  let service: MuroamigoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MuroamigoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
