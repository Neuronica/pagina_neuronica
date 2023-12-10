import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CableadoComponent } from './cableado.component';

describe('CableadoComponent', () => {
  let component: CableadoComponent;
  let fixture: ComponentFixture<CableadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CableadoComponent]
    });
    fixture = TestBed.createComponent(CableadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
