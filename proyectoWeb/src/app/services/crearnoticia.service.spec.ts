import { TestBed } from '@angular/core/testing';

import { CrearnoticiaService } from './crearnoticia.service';

describe('CrearnoticiaService', () => {
  let service: CrearnoticiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearnoticiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
