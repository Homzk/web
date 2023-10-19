import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaForoComponent } from './vista-foro.component';

describe('VistaForoComponent', () => {
  let component: VistaForoComponent;
  let fixture: ComponentFixture<VistaForoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaForoComponent]
    });
    fixture = TestBed.createComponent(VistaForoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
