import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenieriaInversaComponent } from './ingenieria-inversa.component';

describe('IngenieriaInversaComponent', () => {
  let component: IngenieriaInversaComponent;
  let fixture: ComponentFixture<IngenieriaInversaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngenieriaInversaComponent]
    });
    fixture = TestBed.createComponent(IngenieriaInversaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
