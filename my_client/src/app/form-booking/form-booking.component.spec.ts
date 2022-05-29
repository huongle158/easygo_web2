import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBookingComponent } from './form-booking.component';

describe('FormBookingComponent', () => {
  let component: FormBookingComponent;
  let fixture: ComponentFixture<FormBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
