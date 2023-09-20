import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscogenosComponent } from './escogenos.component';

describe('EscogenosComponent', () => {
  let component: EscogenosComponent;
  let fixture: ComponentFixture<EscogenosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscogenosComponent]
    });
    fixture = TestBed.createComponent(EscogenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
