import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomoticaComponent } from './domotica.component';

describe('DomoticaComponent', () => {
  let component: DomoticaComponent;
  let fixture: ComponentFixture<DomoticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DomoticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomoticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
