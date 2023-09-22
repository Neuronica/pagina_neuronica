import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogarComponent } from './hogar.component';

describe('HogarComponent', () => {
  let component: HogarComponent;
  let fixture: ComponentFixture<HogarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HogarComponent]
    });
    fixture = TestBed.createComponent(HogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
