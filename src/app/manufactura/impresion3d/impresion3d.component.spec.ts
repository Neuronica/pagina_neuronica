import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Impresion3dComponent } from './impresion3d.component';

describe('Impresion3dComponent', () => {
  let component: Impresion3dComponent;
  let fixture: ComponentFixture<Impresion3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Impresion3dComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Impresion3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
