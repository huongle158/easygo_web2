import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllroomComponent } from './allroom.component';

describe('AllroomComponent', () => {
  let component: AllroomComponent;
  let fixture: ComponentFixture<AllroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllroomComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
