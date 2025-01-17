import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CncComponent } from './cnc.component';

describe('CncComponent', () => {
  let component: CncComponent;
  let fixture: ComponentFixture<CncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CncComponent]
    });
    fixture = TestBed.createComponent(CncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
