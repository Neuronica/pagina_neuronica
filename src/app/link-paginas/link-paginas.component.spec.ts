import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkPaginasComponent } from './link-paginas.component';

describe('LinkPaginasComponent', () => {
  let component: LinkPaginasComponent;
  let fixture: ComponentFixture<LinkPaginasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkPaginasComponent]
    });
    fixture = TestBed.createComponent(LinkPaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
