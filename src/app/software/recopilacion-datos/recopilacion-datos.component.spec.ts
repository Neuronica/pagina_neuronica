import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecopilacionDatosComponent } from './recopilacion-datos.component';

describe('RecopilacionDatosComponent', () => {
  let component: RecopilacionDatosComponent;
  let fixture: ComponentFixture<RecopilacionDatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecopilacionDatosComponent]
    });
    fixture = TestBed.createComponent(RecopilacionDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
