import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCrearNoticiaComponent } from './vista-crear-noticia.component';

describe('VistaCrearNoticiaComponent', () => {
  let component: VistaCrearNoticiaComponent;
  let fixture: ComponentFixture<VistaCrearNoticiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaCrearNoticiaComponent]
    });
    fixture = TestBed.createComponent(VistaCrearNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
