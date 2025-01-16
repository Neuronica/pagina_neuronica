import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCBAComponent } from './pcba.component';

describe('PCBAComponent', () => {
  let component: PCBAComponent;
  let fixture: ComponentFixture<PCBAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PCBAComponent]
    });
    fixture = TestBed.createComponent(PCBAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
