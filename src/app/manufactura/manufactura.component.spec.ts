import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturaComponent } from './manufactura.component';

describe('ManufacturaComponent', () => {
  let component: ManufacturaComponent;
  let fixture: ComponentFixture<ManufacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManufacturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManufacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
