import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstdetailsComponent } from './firstdetails.component';

describe('FirstdetailsComponent', () => {
  let component: FirstdetailsComponent;
  let fixture: ComponentFixture<FirstdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstdetailsComponent]
    });
    fixture = TestBed.createComponent(FirstdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
