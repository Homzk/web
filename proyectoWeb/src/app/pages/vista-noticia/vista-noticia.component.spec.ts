import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaNoticiaComponent } from './vista-noticia.component';

describe('VistaNoticiaComponent', () => {
  let component: VistaNoticiaComponent;
  let fixture: ComponentFixture<VistaNoticiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaNoticiaComponent]
    });
    fixture = TestBed.createComponent(VistaNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
