import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatesiteComponent } from './privatesite.component';

describe('PrivatesiteComponent', () => {
  let component: PrivatesiteComponent;
  let fixture: ComponentFixture<PrivatesiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivatesiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatesiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
