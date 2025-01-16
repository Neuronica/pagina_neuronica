import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCBComponent } from './pcb.component';

describe('PCBComponent', () => {
  let component: PCBComponent;
  let fixture: ComponentFixture<PCBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PCBComponent]
    });
    fixture = TestBed.createComponent(PCBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
