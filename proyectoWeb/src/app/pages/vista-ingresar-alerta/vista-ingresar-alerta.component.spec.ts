import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaIngresarAlertaComponent } from './vista-ingresar-alerta.component';

describe('VistaIngresarAlertaComponent', () => {
  let component: VistaIngresarAlertaComponent;
  let fixture: ComponentFixture<VistaIngresarAlertaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaIngresarAlertaComponent]
    });
    fixture = TestBed.createComponent(VistaIngresarAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
