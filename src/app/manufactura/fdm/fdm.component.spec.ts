import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdmComponent } from './fdm.component';

describe('FdmComponent', () => {
  let component: FdmComponent;
  let fixture: ComponentFixture<FdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FdmComponent]
    });
    fixture = TestBed.createComponent(FdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
