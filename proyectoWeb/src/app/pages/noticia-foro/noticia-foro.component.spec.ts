import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaForoComponent } from './noticia-foro.component';

describe('NoticiaForoComponent', () => {
  let component: NoticiaForoComponent;
  let fixture: ComponentFixture<NoticiaForoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiaForoComponent]
    });
    fixture = TestBed.createComponent(NoticiaForoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
