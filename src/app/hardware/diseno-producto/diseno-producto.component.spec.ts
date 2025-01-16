import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoProductoComponent } from './diseno-producto.component';

describe('DisenoProductoComponent', () => {
  let component: DisenoProductoComponent;
  let fixture: ComponentFixture<DisenoProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisenoProductoComponent]
    });
    fixture = TestBed.createComponent(DisenoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
