import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconddetailsComponent } from './seconddetails.component';

describe('SeconddetailsComponent', () => {
  let component: SeconddetailsComponent;
  let fixture: ComponentFixture<SeconddetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeconddetailsComponent]
    });
    fixture = TestBed.createComponent(SeconddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
